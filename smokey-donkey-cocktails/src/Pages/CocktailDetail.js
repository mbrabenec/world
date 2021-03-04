import { useEffect, useState } from "react";

function Cocktail(props) {
  const [ingredients, setIngredients] = useState([]);

  const { 
    idDrink: id,
    strDrink: name, 
    strCategory: category,
    strDrinkThumb: image,
    strGlass: glass,
  } = props.cocktail;

  function getIngredients() {
    let array = [];
    for (let i = 1; i < 16; i++) {
      const name = `strIngredient${i}`;
      array = [...array, props.cocktail[name]];
    }

    setIngredients(array);
  }


  async function fetchCocktailDetail(id) {
    const response = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    console.log(data);
  } 

  useEffect(() => {
    getIngredients();
  }, [])

  return (
    <div onClick={() => props.fetchCocktailDetail(id)}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Glass: {glass}</p>
      <img src={`${image}/preview`} alt={name} />
      {ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
    </div>
  )
 
}

export default Cocktail;