// Functions related to creating and manipulating DOM elements.

const searchBox = document.getElementById('input');

export function getSearchValue() {
  console.log(searchBox);
  const text = searchBox.value.trim().toLowerCase();
  console.log(text);
  return text;
}
