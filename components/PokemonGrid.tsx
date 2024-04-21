export default function PokemonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Pikachu
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Charmander
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Squirtle
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Bulbasaur
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Jigglypuff
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Snorlax
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Mewtwo
      </div>
      <div className="bg-gray-200 p-2 rounded-lg" style={{ height: "400px" }}>
        Mew
      </div>
    </div>
  );
}
