import { useState } from "react";

export default function SearchBar({ setPokemons }) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();

      const pokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        stats: data.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
      };

      setPokemons([pokemon]); // overwrite list with search result
    } catch (err) {
      setPokemons([]);
    }

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search Pokémon"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
        Search
      </button>
    </form>
  );
}
