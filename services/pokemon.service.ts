import { PokemonPageModel } from "@/models/pokemon-page.model";
import { PokemonModel } from "@/models/pokemon.model";

export const getPokemonPage = async (
  offset: number = 0
): Promise<PokemonPageModel> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

export const getPokemonsByPage = async (
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
            image: data.sprites.front_default,
            type: data.types.map((type: any) => type.type.name),
            weight: data.weight,
            sprites: data.sprites,
            types: data.types,
          };
          return pokemon;
        });
    })
  );
  return pokemons;
};

export const getPokemonById = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};
