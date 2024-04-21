import Link from "next/link";
import PokeballImage from "../public/images/pokeball.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image alt="pokeball" src={PokeballImage} width={100} height={100} />
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mt-8">
          400
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Not Found
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          The page not exists
        </p>
        <Link href="/" className="">
          <button className="bg-red-500 text-white px-4 py-2 mt-4">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
