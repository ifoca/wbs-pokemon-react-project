export default function CardItem({ card, onFavorite }) {
  return (
    <div className="flex flex-col bg-green-300">
      <h6 className="capitalize">{card.name}</h6>
      <img alt="fake image"></img>
      <ul>
        {card.stats.map((s) => (
          <li key={s.name}>
            {s.name}: {s.value}
          </li>
        ))}
      </ul>
      <button
        disabled={card.favorite === true}
        onClick={() => onFavorite(card)}
        className={`px-2 py-1 rounded ${
          card.favorite ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'
        }`}
      >
        Catch it!
      </button>
    </div>
  );
}
