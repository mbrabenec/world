import logo from './logo.svg';
import './App.css';
import SearchResults from './Components/SearchResults';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchOffset, setSearchOffset] = useState(0);

  async function fetchData() {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${searchOffset}`);
    const data = await response.json();
    setSearchResults(data.query.search);
  }

  function nextTen () {
    setSearchOffset(searchOffset === 0 ? searchOffset+10 : 0);
    fetchData();

  }

  function lastTen () {
    setSearchOffset(searchOffset-10);
    fetchData();

  }


  return (
    <div className="App">
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        fetchData={fetchData}
      />
      <SearchResults 
        searchResults={searchResults} 
      />
      <button type="submit" onClick={()=>nextTen()}>Next 10</button>
      <button type="submit" onClick={()=>lastTen()}>Prev 10</button>
    </div>
  );
}

export default App;