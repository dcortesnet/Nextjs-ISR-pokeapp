import Image from "next/image";
import Link from "next/link";

interface PokemonGridCardProps {
  pokemon: {
    id: number;
    name: string;
    image: string;
  };
}

export default function PokemonGridCard(props: PokemonGridCardProps) {
  return (
    <Link href={`/${props.pokemon.id}`} key={props.pokemon.id}>
      <div className="p-2 border border-gray-300 flex justify-center cursor-pointer">
        <div className="flex flex-col justify-center">
          <Image
            src={props.pokemon.image}
            alt={props.pokemon.name}
            width={100}
            height={100}
          />
          <p className="text-center">{props.pokemon.name}</p>
        </div>
      </div>
    </Link>
  );
}
