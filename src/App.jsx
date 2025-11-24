import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';
import { useState } from 'react';
import FilterFavorites from './components/FilterFavorites';

function App() {
  let cards = [
    {
      id: 1,
      name: 'charmeleon',
      favorite: false,
      img: '',
      stats: [
        { value: 44, name: 'hp' },
        { value: 98, name: 'attack' },
      ],
    },
    {
      id: 2,
      name: 'venusaur',
      favorite: false,
      img: '',
      stats: [
        { value: 44, name: 'hp' },
        { value: 98, name: 'attack' },
      ],
    },
    {
      id: 3,
      name: 'squirtle',
      favorite: false,
      img: '',
      stats: [
        { value: 44, name: 'hp' },
        { value: 98, name: 'attack' },
      ],
    },
    {
      id: 4,
      name: 'blastoise',
      favorite: false,
      img: '',
      stats: [
        { value: 44, name: 'hp' },
        { value: 98, name: 'attack' },
      ],
    },
  ];

  const [currentList, addCard] = useState(cards);

  function addCardToList(text) {
    const newCard = {
      id: currentList.length + 1,
      text,
      completed: false,
    };
    return addCard((prev) => [...prev, newCard]);
  }

  return (
    <div>
      <Header />
      <SearchBar />
      <FilterFavorites />
      <CardsList cards={currentList} />
    </div>
  );
}

export default App;

// we need to initial list to 20 cards or so

// we need a component to build the card for
// each of the items in the list with functional updated

// we need to "reset" the list to 1 card when searching
// for an item, with direct update, not functional one
