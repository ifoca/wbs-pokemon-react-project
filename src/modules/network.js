// Functions related to fetching data from the API.
let allPokemons = [];

export async function getPokemon(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error('Something went wrong');
    const data = await res.json();

    // Extract the array of stats objects
    const stats = data.stats.map((s) => ({
      value: s.base_stat,
      name: s.stat.name,
      effort: s.effort,
    }));
    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      stats,
      favorite: false,
    };
  } catch (err) {
    console.error(err);
  }
}

async function getAllPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    if (!res.ok) throw new Error('Something went wrong.');
    const data = await res.json();
    const results = data.results;
    return results;
  } catch (err) {
    console.error(err);
  }
}

export function listPokemons() {
  getAllPokemon().then((results) => {
    results.forEach((item) => {
      // console.log(item);
      getPokemon(item.url).then((pokemon) => {
        // console.log(pokemon);
        allPokemons.push(pokemon);
        console.log(allPokemons);
      });
      return allPokemons;
    });
  });
}

// fetchAllPokemon(allPokemonPath).then(({ partialResults }) => {
//   console.log(partialResults);
//   partialResults.forEach((result) => {
//     const pokemonIdPath = result.url;
//     loadPokemon(pokemonIdPath)
