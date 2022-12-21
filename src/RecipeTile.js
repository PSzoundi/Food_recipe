import React from 'react'
import Axios from "axios";
import "./RecipeTile.css"

export default function RecipeTile({recipe}) {
  // async function addToDataBase(){
  //     console.log("testing",recipe.recipe.label, " ", recipe.recipe.image);

  //     await Axios.post('/recipes', {
  //      label: recipe.recipe.label,
  //      image: recipe.recipe.image
  //     },
  //     {
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       }
  //     })
  //     // fetch("/recipes", {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json'
  //     //   },
  //     //   body: JSON.stringify({label: recipe.recipe.label, image : recipe.recipe.image}),
  //     // })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
    
  // }
  // addToDataBase();
  return (
    <div className="recipeTile" onClick={() =>{
        window.open(recipe["recipe"]["url"]);
    }}>
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
        <p className="recipeTile__name"> {recipe["recipe"]["label"]}</p>
    </div>
  )
}
// fetch("/backend/reservations/", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({user_id: auth.user.id, listing_id : this.props.match.params.id}),
// })
