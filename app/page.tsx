import PokemonSearch from "@/components/pokemon-search";
import PokeTitle from "@/components/pokemon-title";
import PokemonGrid from "@/components/pokemon-grid";
import PokemonPagination from "@/components/pokemon-pagination";
import { getPokemonPage, getPokemonsByPage } from "@/services/pokemon.service";
import PokemonNotFound from "@/components/pokemon-not-found";

interface PokemonListPageProps {
  searchParams?: {
    page?: string;
  };
}

export default async function PokemonListPage(props: PokemonListPageProps) {
  const page = Number(props.searchParams?.page) || 1;
  const pokemonPage = await getPokemonPage(page);
  const pokemons = await getPokemonsByPage(pokemonPage);

  return (
    <main className="">
      <PokeTitle title="Pokedex" />
      <PokemonSearch />
      {pokemons.length === 0 ? (
        <PokemonNotFound />
      ) : (
        <>
          <PokemonGrid pokemons={pokemons} />
          <PokemonPagination pokemonPage={{ ...pokemonPage, current: page }} />
        </>
      )}
    </main>
  );
}
