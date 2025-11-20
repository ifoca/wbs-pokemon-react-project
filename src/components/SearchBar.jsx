export default function SearchBar() {
  return (
    <section className="search-bar flex justify-center">
      <form className="flex justify-around w-2/3 p-8">
        <input
          type="text"
          className="w-5/6 p-3 border-1 border-gray-300 shadow-xl rounded-md"
          name="search-input"
          placeholder="Search for your favorite pokemon"
        ></input>
        <button type="submit" className="bg-amber-500 p-3 rounded-md text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}
