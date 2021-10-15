import GlobalStyle from '../styles/GlobalStyles';
import { PokemonProvider } from '../context/pokemonData';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyle /> */}
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </>
  );
}

export default MyApp;
