import PokemonSearch from "@/components/pokemon-search";
import PokeTitle from "@/components/pokemon-title";
import PokemonGrid from "@/components/pokemon-grid";
import PokemonPagination from "@/components/pokemon-pagination";
import { getPokemonPage, getPokemonsByPage } from "@/services/pokemon.service";

export default async function PokemonListPage() {
  const pokemonPage = await getPokemonPage();
  const pokemons = await getPokemonsByPage(pokemonPage);

  return (
    <main className="">
      <PokeTitle title="Pokedex" />
      <PokemonSearch />
      <PokemonGrid pokemons={pokemons} />
      <PokemonPagination />
    </main>
  );
}
