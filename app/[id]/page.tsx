import PokemonDetailCard from "@/components/pokemon-detail-card";
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
  const { id, name } = await getPokemonById(props.params.id);

  return {
    title: `#${id} - ${name}`,
    description: "Pokemon Detail Page",
    keywords: "Pokemon, Detail",
  };
}

export default async function PokemonDetailPage(props: PokemonDetailProps) {
  const pokemon = await getPokemonById(props.params.id);
  return <PokemonDetailCard pokemon={pokemon} />;
}
