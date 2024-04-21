import PokemonDetailCard from "@/components/pokemon-detail-card";
import PokemonNotFound from "@/components/pokemon-not-found";
import { getPokemonById } from "@/services/pokemon.service";
import { Metadata } from "next";

export interface PokemonDetailProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  props: PokemonDetailProps
): Promise<Metadata> {
  const pokemon = await getPokemonById(props.params.id);
  if (!pokemon) {
    return {
      title: `#Not Found`,
      description: "Pokemon Detail Page",
      keywords: "Pokemon, Detail",
    };
  }
  const { id, name } = pokemon;
  return {
    title: `#${id} - ${name}`,
    description: "Pokemon Detail Page",
    keywords: "Pokemon, Detail",
  };
}

export default async function PokemonDetailPage(props: PokemonDetailProps) {
  const pokemon = await getPokemonById(props.params.id);
  if (!pokemon) {
    return <PokemonNotFound />;
  }
  return <PokemonDetailCard pokemon={pokemon} />;
}
