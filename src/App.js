
import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([])

  const YOUR_APP_ID ="25c70791";
  const YOUR_APP_KEY ="15af10d373983dcabd075d4bf273c726";

  var url =` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">

      <h1 >  Food varieties recipes    </h1>
      
      <form className = "app__searchForm" onSubmit={onSubmit}>
        <input 
          type="text"
          className="app__input"
          placeholder="Enter the ingredient"
          value={query} 
          onChange = {(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="search" />
        
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
        return <RecipeTile recipe = {recipe} />;
        })}
      </div>

    </div>
  );
}

export default App;
