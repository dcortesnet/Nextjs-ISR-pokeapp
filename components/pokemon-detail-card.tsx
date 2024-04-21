import { PokemonModel } from "@/models/pokemon.model";
import Image from "next/image";

interface PokemonDetailCardProps {
  pokemon: PokemonModel;
}

export default function PokemonDetailCard(props: PokemonDetailCardProps) {
  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-lg border border-gray-300 mx-auto bg-white bg-clip-border  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{props.pokemon.id} {props.pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={props.pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${props.pokemon.name}`}
              className="mb-5"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 rounded-lg border border-gray-300  ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {props.pokemon.types.map((type: any) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  rounded-lg border border-gray-300 ">
            <p className="text-sm text-gray-600">weight</p>
            <span className="text-base font-medium text-navy-700 flex">
              {props.pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 rounded-lg border border-gray-300 ">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={props.pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${props.pokemon.name}`}
              />
              <Image
                src={props.pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${props.pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 rounded-lg border border-gray-300 ">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={props.pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${props.pokemon.name}`}
              />

              <Image
                src={props.pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${props.pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
