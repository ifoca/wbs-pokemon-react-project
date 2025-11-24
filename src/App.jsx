import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';
import FilterFavorites from './components/FilterFavorites';
import { useState } from 'react';

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

  const [currentList, newList] = useState(cards);

  function updateCardsList(list) {
    console.log(list);
    return newList(list);
  }

  return (
    <div>
      <Header />
      <SearchBar updateList={updateCardsList} />
      <FilterFavorites updateList={updateCardsList} />
      <CardsList cards={currentList} />
    </div>
  );
}

export default App;

// we need to initial list to 20 cards or so

// we need to "reset" the list to 1 card when searching
// for an item, with direct update, not functional one

// we need an update list component
// when searching for an item, use the direct update
// and set the initial value to the searched item

// when favoriting one item, we need to add them to the local storage
// set the value of favorite: to true?
// get the local storage and
