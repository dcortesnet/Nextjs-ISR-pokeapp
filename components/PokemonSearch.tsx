export default function PokemonSearch() {
  return (
    <div className="flex flex-col sm:flex-row justify-center m-5 gap-1">
      <input
        type="text"
        placeholder="Pikachu"
        className="px-4 py-2 rounded-lg border border-gray-300"
      />
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white sm:w-auto w-full">
        Buscar
      </button>
    </div>
  );
}
