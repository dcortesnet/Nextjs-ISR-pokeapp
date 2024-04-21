import PokemonSearch from "@/components/pokemon-search";
import PokeTitle from "@/components/pokemon-title";
import PokemonGrid from "@/components/pokemon-grid";
import PokemonPagination from "@/components/pokemon-pagination";
import {
  getPokemonByName,
  getPokemonPage,
  getPokemonsByPage,
} from "@/services/pokemon.service";
import PokemonNotFound from "@/components/pokemon-not-found";

interface PokemonListPageProps {
  searchParams?: {
    page?: string;
    search?: string;
  };
}

export default async function PokemonListPage(props: PokemonListPageProps) {
  if (props.searchParams?.search) {
    const pokemon = await getPokemonByName(props.searchParams.search);
    return (
      <>
        <main>
          <PokeTitle title="Pokedex" />
          <PokemonSearch />
          {pokemon ? <PokemonGrid pokemons={[pokemon]} /> : <PokemonNotFound />}
        </main>
      </>
    );
  }

  const page = Number(props.searchParams?.page) || 1;
  const pokemonPage = await getPokemonPage(page);
  const pokemons = await getPokemonsByPage(pokemonPage);

  return (
    <main>
      <PokeTitle title="Pokedex" />
      <PokemonSearch />
      <PokemonGrid pokemons={pokemons} />
      <PokemonPagination pokemonPage={{ ...pokemonPage, current: page }} />
    </main>
  );
}
