import Head from 'next/head';
import Navbar from './NavBar/NavBar';
import { PokemonProvider } from '../context/pokemonData';

export default function Layout({ children }) {
  return (
    <PokemonProvider>
      <div>
        <Head>
          <title>{appTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        {children}
      </div>
    </PokemonProvider>
  );
}
