import styled from 'styled-components';

export const Card = ({ pokemon, onCatchPokemon }) => {
  const handleClick = () => {
    onCatchPokemon(pokemon.id);
  };

  return (
    <StyledCard>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.image} width="200" height="200" />
      <Pokeball
        hasBeenCaught={pokemon.hasBeenCaught}
        src="/images/pokeball.png"
        width="50"
        height="50"
        onClick={handleClick}
      />
    </StyledCard>
  );
};

const StyledCard = styled.article`
  background: papayawhip;
  margin: 0.5rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pokeball = styled.img`
  opacity: ${(props) => (props.hasBeenCaught ? 1 : 0.5)};
`;
