"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function PokemonSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [text, setText] = useState(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = () => {
    if (text === "") {
      const params = new URLSearchParams(searchParams);
      params.delete("search");
      router.replace(`${pathname}?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams);
      params.set("search", text);
      params.delete("page");
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center m-5 gap-1">
      <input
        type="text"
        placeholder="Pikachu"
        className="px-4 py-2  border border-gray-300"
        onChange={(e) => setText(e.target.value.toLowerCase())}
        defaultValue={text}
      />
      <button
        className="px-4 py-2  bg-red-500 text-white sm:w-auto w-full"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
