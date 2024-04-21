import { PokemonModel } from "@/models/pokemon.model";
import Image from "next/image";

interface PokemonGridProps {
  pokemons: PokemonModel[];
}

export default function PokemonGrid(props: PokemonGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
      {props.pokemons.map((pokemon: PokemonModel) => {
        return (
          <div className="p-2 border border-gray-300 flex justify-center cursor-pointer">
            <div className="flex flex-col justify-center">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <p className="text-center">{pokemon.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
