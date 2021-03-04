import logo from './logo.svg';
import './App.css';
import SearchResults from './Components/SearchResults';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`);
    const data = await response.json();
    setSearchResults(data.query.search);
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
    </div>
  );
}

export default App;
