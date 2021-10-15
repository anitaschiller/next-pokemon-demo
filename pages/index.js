import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { usePokemon } from '../context/pokemonData';

export default function Home({ details }) {
  const { pokemon, setPokemon } = usePokemon();

  const adaptedDetails = details.map((detailSet) => {
    return {
      id: uuidv4(),
      name: detailSet.name,
      image: detailSet.sprites.front_default,
      moves: detailSet.moves,
      hasBeenCaught: false,
    };
  });
  const [myPokemon, setMyPokemon] = useState(adaptedDetails);

  /*   useEffect(() => {
    setPokemon(myPokemon);
  }, [myPokemon]); */

  const catchPokemon = (caughtPokemonId) => {
    console.log(caughtPokemonId);
    const caughtPokemon = myPokemon.find(
      (pokemon) => pokemon.id === caughtPokemonId
    );
    const caughtPokemonIndex = myPokemon.findIndex(
      (pokemon) => pokemon.id === caughtPokemonId
    );
    const pokemonBeforeCaughtOne = myPokemon.slice(0, caughtPokemonIndex);
    const pokemonAfterCaughtOne = myPokemon.slice(caughtPokemonIndex + 1);
    caughtPokemon.hasBeenCaught = !caughtPokemon.hasBeenCaught;

    setMyPokemon([
      ...pokemonBeforeCaughtOne,
      caughtPokemon,
      ...pokemonAfterCaughtOne,
    ]);
  };

  return (
    <div>
      <Head>
        <title>My Pokemon App</title>
      </Head>
      <h1>Welcome!</h1>
      <Image src="/images/pokeball.png" width={20} height={20} />
      <section className="about-me">
        <p>
          Hi I'm Anita and I want to become the best Pokemon trainer in the
          world!
        </p>
        <StyledImage src="/images/portrait.jpg" width={150} height={150} />
      </section>
      <CardContainer>
        {myPokemon.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onCatchPokemon={catchPokemon}
          />
        ))}
      </CardContainer>
      <p>
        Go to the{' '}
        <Link href="/caught">
          <a
            onClick={() => {
              router.push({
                pathname: '/caught',
                query: { data: myPokemon },
              });
            }}
          >
            Caught Page
          </a>
        </Link>
      </p>
    </div>
  );
}

const StyledImage = styled(Image)`
  border-radius: 50%;
`;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const result = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await result.json();
  const allPokemonData = data.results;

  const details = await Promise.all(
    allPokemonData.map(async (pokemon) => {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await result.json();
      return data;
    })
  );

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      details,
    },
  };
}
