import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cocktail from './Components/Cocktail';
import Index from './Pages/Index';
import SearchBar from './Components/Search/SearchBar';
import SearchResults from './Pages/SearchResults';

function App() {

  return (
     <BrowserRouter>
     <Switch>
        <Route exact path="/" 
          component={() => <Index newProp="newProp" />} 
        />
        <Route 
          path="/search/:query" 
          component={SearchResults} 
        />
      </Switch>
     </BrowserRouter>
    
  )
}

export default App;
