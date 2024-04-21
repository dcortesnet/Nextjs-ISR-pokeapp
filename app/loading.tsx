import Image from "next/image";
import PikachuRunning from "../public/gifs/pikachu-running.gif";

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image
        src={PikachuRunning}
        width={300}
        height={300}
        alt="loading"
      ></Image>
    </div>
  );
}
