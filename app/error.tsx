"use client";

import PokeballImage from "../public/images/pokeball.png";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image alt="pokeball" src={PokeballImage} width={100} height={100} />
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mt-8">
          500
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers.
        </p>
      </div>
    </div>
  );
}
