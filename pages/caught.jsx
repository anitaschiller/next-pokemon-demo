import Head from 'next/head';
import Link from 'next/link';
import { Card } from '../components/Card';
import { usePokemon } from '../context/pokemonData';

const Caught = () => {
  const { pokemon, setPokemon } = usePokemon();
  console.log('pokemon', pokemon);
  return (
    <>
      <Head>
        <title>Caught Pokemon</title>
      </Head>
      <h1>My Caught Pokemon</h1>
      <p>
        Back to{' '}
        <Link href="/">
          <a>home</a>
        </Link>
      </p>
    </>
  );
};

export default Caught;
