import { React, useEffect, useState } from "react";


//components
import ACountry from "../Components/ACountry";



function Index(props) {

    const [countries, setCounties] =useState([]);

  async function fetchAll() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    setCounties(data);

  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div>
        <h1>Countries</h1>
        {countries.map((country, index) => (
            <ACountry country={country} key={index} setChosen={props.setChosen}/>
        ))}
        
        {console.log(countries)}
    </div>

  )
  
}

export default Index;
