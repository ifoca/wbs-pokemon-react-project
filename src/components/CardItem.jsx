export default function CardItem({ card }) {
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
      <button>Catch it!</button>
    </div>
  );
}
