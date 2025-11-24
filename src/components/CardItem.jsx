export default function CardItem({ card }) {
  return (
    <div className="flex flex-col bg-green-300">
      <h6> Something: {card.name}</h6>
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

//   const cardDiv = document.createElement('div');
//   const cardTitle = document.createElement('h6');
//   const image = document.createElement('img');
//   const statsList = document.createElement('ul');
//   const catchBtn = document.createElement('button');
