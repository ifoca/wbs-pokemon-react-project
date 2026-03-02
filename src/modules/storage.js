// Functions related to localStorage operations.

export function getLocalStorageItem() {
  const localStorageItem = JSON.parse(localStorage.getItem('favoritePokemon')) || [];
  return localStorageItem;
}

// Save to local storage a new item
export function saveToLocalStorage(newItem) {
  const updatedLocalStorage = [newItem, ...getLocalStorageItem()];
  localStorage.setItem('favoritePokemon', JSON.stringify(updatedLocalStorage));
}

// remove item from the local storage
// export function removeFromLocalStorage(oldItem) {
//   const currentStorage = getLocalStorageItem();
//   // creates a new array by filtering out the found item
//   currentStorage = currentStorage.filter(({ id }) => id === oldItem);
//   localStorage.setItem('favoritePokemon', JSON.stringify(currentStorage));
// }
