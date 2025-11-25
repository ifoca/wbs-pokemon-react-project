export default function Cards({ pokemon }) {
  return (
    <div
      id={pokemon.id}
      className="
        bg-white 
        p-4 
        rounded-xl 
        shadow-md 
        border 
        border-gray-100 
        hover:shadow-lg 
        hover:-translate-y-1 
        transition 
        flex 
        flex-col 
        items-center 
        capitalize
      "
    >
      <h6 className="font-bold text-lg tracking-wide text-gray-800 mb-2">
        {pokemon.name}
      </h6>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-32 h-32 object-contain drop-shadow-sm"
      />

      <ul className="mt-4 w-full text-sm text-gray-700 space-y-1">
        {pokemon.stats.map((stat) => (
          <li
            key={stat.name}
            className="
              flex 
              justify-between 
              bg-gray-50 
              px-3 
              py-1.5 
              rounded-md 
              border 
              border-gray-200
            "
          >
            <span className="font-medium">{stat.name}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>

      <button
        className="
          mt-5 
          px-5 
          py-2 
          bg-red-500 
          text-white 
          font-semibold 
          rounded-full 
          shadow 
          hover:bg-red-600 
          hover:scale-105 
          transition-all
        "
      >
        Catch it!
      </button>
    </div>
  );
}
