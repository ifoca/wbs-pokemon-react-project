// Functions related to fetching data from the API.

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
    };
  } catch (err) {
    console.error(err);
  }
}
