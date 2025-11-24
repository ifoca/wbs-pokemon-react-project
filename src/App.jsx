import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [loading, setLoading] = useState(false);

  async function loadPokemons(url) {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();
    setNextPage(data.next);

    const detailedPokemon = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(p.url);
        const info = await res.json();

        return {
          id: info.id,
          name: info.name,
          image: info.sprites.other["official-artwork"].front_default,
          stats: info.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        };
      })
    );

    setPokemons((prev) => [...prev, ...detailedPokemon]);
    setLoading(false);
  }

  useEffect(() => {
    loadPokemons(nextPage);
  }, []);

  return (
    <div className="p-6">
      <Header />
      <SearchBar setPokemons={setPokemons} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {pokemons.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {nextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => loadPokemons(nextPage)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
