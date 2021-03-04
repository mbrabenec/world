import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {

  const [cocktail, setCocktail] = useState([]);
  const [query, setQuery] = useState("");

  function fetchRandom () {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => setCocktail(data && data.drinks[0] && data.drinks));
  }

  function fetchQuery () {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => setCocktail(data && data.drinks[0] && data.drinks));

  }

  useEffect(() => {
    fetchRandom ();
  }, [])

  function handleChange(e) {
    setQuery(e.target.value);
  } 


  return (
    <div className="App">


      <SearchBar 
        fetchRandom={fetchRandom}
        fetchQuery={fetchQuery}
        handleChange={handleChange}
        query={query}
        setQuery={setQuery}
      />

      {(cocktail) && <Results cocktail={cocktail} />}
     
    </div>
  );
}

export default App;
