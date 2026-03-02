import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';
import { getLocalStorageItem } from './modules/storage.js';
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

  // initial value should be the all pokemon fetch
  const [currentList, setNewList] = useState(cards);
  const [favorites, addFavorites] = useState(getLocalStorageItem());

  /* 
  compare the current list to the local storage
      if list.id === localStorage.item.id
          set the favorite property to true
          set this as the new list 
          --> the buttons will be disabled 
  */

  function handleAddFavorites(item) {
    const updatedItem = { ...item, favorite: true };

    console.log(updatedItem);
    setNewList((prev) => prev.map((i) => (i.id === item.id ? updatedItem : i)));

    addFavorites((prev) => {
      const updated = [...prev, updatedItem];
      localStorage.setItem('favoritePokemon', JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <div>
      <Header />
      <SearchBar updatedList={setNewList} />
      <CardsList cards={currentList} onFavorite={handleAddFavorites} />
    </div>
  );
}

export default App;
