import React from "react";

function Results(props) {

    console.log(props);

  return (
    <div>
    
        {props.cocktail.map((drink, i) => (
            <>
            <h2>{drink.strDrink}</h2>
            <img style={{ height:"6rem"}} src={drink.strDrinkThumb} alt=""/>
            </>
        ))}
        

    </div>



  )
}

export default Results;
