import React from "react";

function SearchBar (props) {



    return (
        <div>
            <p>sb</p>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.fetchQuery();
            }}>
                
                <input type="text"
                    value={props.query} 
                    // onChange={(e) => props.setQuery(e.target.value)} 
                    onChange={(e) => props.handleChange(e)}
                    name="searchBar"/>

                <input type="submit"
                />

                <input type="button" 
                    value="I'm feelin lucky"
                    onClick={() => props.fetchRandom()}
                />
            </form>
        </div>
    )
}

export default SearchBar;