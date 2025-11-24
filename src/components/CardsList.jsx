import CardItem from './CardItem';

export default function CardsList({ cards }) {
  return (
    <section className="cards-container bg-green-100">
      <p>Hello from the Cards section</p>
      <div className="cards-list grid grid-cols-4 gap-8 m-20">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
