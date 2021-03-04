function SearchBar(props) {
  return (
  <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.fetchData();
    }}>
      <input 
        name="searchBar" 
        value={props.searchQuery} 
        onChange={(e) => props.setSearchQuery(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  </div>
  )
}

export default SearchBar;
