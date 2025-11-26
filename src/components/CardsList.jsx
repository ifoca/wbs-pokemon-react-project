import CardItem from './CardItem';

export default function CardsList({ cards, onFavorite }) {
  return (
    <section className="cards-container bg-green-100">
      <p className="text-center p-3">The world of Pokemon</p>
      <div className="cards-list grid grid-cols-4 gap-8 m-20">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} onFavorite={onFavorite} />
        ))}
      </div>
    </section>
  );
}
