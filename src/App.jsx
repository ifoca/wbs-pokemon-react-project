import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Cards />
    </div>
  );
}

export default App;

// we need to initial list to 20 cards or so

// we need a component to build the card for
// each of the items in the list with functional updated

// we need to "reset" the list to 1 card when searching
// for an item, with direct update, not functional one
