export default function PokemonPagination() {
  return (
    <nav className="flex justify-center m-8">
      <ul className="flex">
        <li className="mr-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
          >
            Previous
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
          >
            1
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
          >
            2
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
          >
            3
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
