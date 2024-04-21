import Image from "next/image";
import PokeballImage from "../public/images/pokeball.png";

export default function PokemonNotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image alt="pokeball" src={PokeballImage} width={100} height={100} />
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mt-8">
          400
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Pokemon not found
        </p>
      </div>
    </div>
  );
}
