import { PokemonModel } from "@/models/pokemon.model";
import PokemonGridCard from "./pokemon-grid-card";

interface PokemonGridProps {
  pokemons: PokemonModel[];
}

export default function PokemonGrid(props: PokemonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
      {props.pokemons.map((pokemon: PokemonModel) => {
        return <PokemonGridCard pokemon={pokemon} />;
      })}
    </div>
  );
}
