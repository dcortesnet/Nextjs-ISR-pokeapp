import Image from "next/image";
import { PokemonPageModel } from "../models/pokemon-page.model";
import PokemonSearch from "@/components/PokemonSearch";
import PokeTitle from "@/components/PokeTitle";
import PokemonGrid from "@/components/PokemonGrid";
import PokemonLoadMoreButton from "@/components/PokemonLoadMoreButton";

export default async function PokemonListPage() {
  const getPokemonPage = async (): Promise<PokemonPageModel | null> => {
    const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => data);
    return data;
  };

  const pokemonPage = await getPokemonPage();

  return (
    <main className="">
      <PokeTitle title="Pokedex" />
      <PokemonSearch />
      <PokemonGrid />
      <PokemonLoadMoreButton />
    </main>
  );
}
