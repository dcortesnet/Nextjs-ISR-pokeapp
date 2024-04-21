import { PokemonPageModel } from "../models/pokemon-page.model";
import { PokemonModel } from "@/models/pokemon.model";
import PokemonSearch from "@/components/PokemonSearch";
import PokeTitle from "@/components/PokeTitle";
import PokemonGrid from "@/components/PokemonGrid";
import PokemonLoadMoreButton from "@/components/PokemonLoadMoreButton";

export default async function PokemonListPage(offset: number = 0) {
  const getPokemonPage = async (): Promise<PokemonPageModel> => {
    const data = fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => data);
    return data;
  };

  const getPokemonsByPage = async (
    pokemonPage: PokemonPageModel
  ): Promise<PokemonModel[] | []> => {
    const pokemons = await Promise.all(
      pokemonPage.results.map((pokemon) => {
        return fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            const pokemon: PokemonModel = {
              id: data.id,
              name: data.name,
              image:
                data.sprites.other.dream_world.front_default ||
                data.sprites.front_default,
              type: data.types.map((type: any) => type.type.name),
              weight: data.weight,
            };
            return pokemon;
          });
      })
    );
    return pokemons;
  };

  const pokemonPage = await getPokemonPage();
  const pokemons = await getPokemonsByPage(pokemonPage);

  return (
    <main className="">
      <PokeTitle title="Pokedex" />
      <PokemonSearch />
      <PokemonGrid pokemons={pokemons} />
      <PokemonLoadMoreButton />
    </main>
  );
}
