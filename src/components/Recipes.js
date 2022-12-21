
import "../App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "../RecipeTile";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Card , Container} from "react-bootstrap";
import Data from "../data.json";

function Recipes() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([])
  const [myrecipes, setmyrecipes] = useState(false)


  const YOUR_APP_ID ="25c70791";
  const YOUR_APP_KEY ="15af10d373983dcabd075d4bf273c726";

  var url =` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    console.log("Recipes", recipes);
    setmyrecipes(false);
    
  }
  const displayrecipe = () =>{
    if(myrecipes===true)

      return <div className="app__recipes">
          {Data.map((recipe) => {
          return < RecipeTile recipe = {recipe} />;
          })}
    </div>
    else
    return <div className="app__recipes">
          {recipes.map((recipe) => {
          return < RecipeTile recipe = {recipe} />;
          })}
    </div>
  }
  const getmyrecipes = (e) =>{
    e.preventDefault();
    setmyrecipes(true);
    console.log(Data);
  }
  return (
    <div className="recipes">
      <Container md >
      <div class="shadow-sm p-3 mb-5  bg-body rounded text-center ">
        <h1> Western's celebrity chef cuisine </h1>
      </div>
      </Container>
      <div className="awesome">
        <h2> Search for awesome food recipes you would love to try with friends and family.</h2>
      </div>
      <form className = "app__searchForm" >
        <input 
          type="text"
          className="app__input"
          placeholder="Enter the ingredient"
          value={query} 
          onChange = {(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" onClick= {onSubmit}/>
        <input className="app__submit" type="submit" value="My recipes" onClick={getmyrecipes} />

      </form>

      {displayrecipe()}
      {/* <div className="app__recipes">
        {recipes.map((recipe) => {
        return < RecipeTile recipe = {recipe} />;
        })}
      </div> */}
      
    </div>
    
  );
  
}

export default Recipes;
