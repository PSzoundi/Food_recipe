
//  import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Card , Container} from "react-bootstrap";
import Footer from "./components/Footer";
import { 
  Link,
  NavLink
} from 'react-router-dom';
import Recipes from "./components/Recipes";
import Navigation from "./components/Navigation";
function App() {
  
  return (
    <div className="app">
      {/* <Navigation /> */}
    <Recipes />
    <Footer /> 
    </div>
    
  );
  
}

export default App;
