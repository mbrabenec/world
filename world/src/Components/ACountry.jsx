import { React, useEffect, useState } from "react";
import {Link} from "react-router-dom";

function ACountry(props) {


  return (
    <div>
        <Link to={`/countries/${props.country.name}`}>
            <h2>{props.country.name}</h2>
        </Link>
        <p>{props.country.population}</p>
        
        
    </div>
  )

}

export default ACountry;
