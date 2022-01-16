import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";

import { NavBar } from './components/NavBar';
import { AddPost } from "./components/AddPost";



function App() {
  
  return (
    
    <div>
    <NavBar/>
    <AddPost />
    </div>
    );
  
  
}

export default App;