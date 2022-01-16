import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { AllPosts } from "./components/AllPost";



function App() {
  
  return (
    
    <div>
    <NavBar/>
    <AllPosts />
    </div>
    );
  
  
}

export default App;