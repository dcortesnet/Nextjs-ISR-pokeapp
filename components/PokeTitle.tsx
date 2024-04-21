import Image from "next/image";
import PokeballImage from "../public/images/pokeball.png";

interface TitleProps {
  title: string;
}

export default function PokeTitle(props: TitleProps) {
  return (
    <div className="flex justify-center items-center">
      <Image alt="pokeball" src={PokeballImage} width={100} height={100} />
      <h1 className="text-5xl font-bold">{props.title}</h1>
    </div>
  );
}
