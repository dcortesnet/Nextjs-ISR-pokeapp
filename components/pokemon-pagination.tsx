"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface PokemonPaginationProps {
  pokemonPage: {
    current: number;
    count: number;
    next: string;
    previous: string;
  };
}

export default function PokemonPagination(props: PokemonPaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handlePreviousPage = (current: number) => {
    const params = new URLSearchParams(searchParams);
    const previousPage = current - 1;
    params.set("page", previousPage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleNextPage = (current: number) => {
    const params = new URLSearchParams(searchParams);
    const nextPage = current + 1;
    params.set("page", nextPage.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <nav className="flex justify-center m-8">
      <ul className="flex">
        <li className="mr-2">
          <button
            className="px-3 py-1 text-white "
            onClick={() => handlePreviousPage(props.pokemonPage.current)}
            disabled={props.pokemonPage.previous === null}
            style={{
              cursor:
                props.pokemonPage.previous === null ? "not-allowed" : "pointer",
              backgroundColor:
                props.pokemonPage.previous === null ? "gray" : "#EF4444",
            }}
          >
            Previous
          </button>
        </li>
        <li className="mr-2">
          <button className="px-3 py-1 bg-red-500 text-white">
            {props.pokemonPage.current}
          </button>
        </li>

        <li className="mr-2">
          <button
            className="px-3 py-1 bg-red-500 text-white"
            onClick={() => handleNextPage(props.pokemonPage.current)}
            disabled={props.pokemonPage.next === null}
            style={{
              cursor:
                props.pokemonPage.next === null ? "not-allowed" : "pointer",
              backgroundColor:
                props.pokemonPage.next === null ? "gray" : "#EF4444",
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
