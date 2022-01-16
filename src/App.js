import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import { NavBar } from './components/NavBar';
import  {AllPosts} from "./components/AllPost";
import {MyPosts}  from "./components/MyPosts";
import {AddPost}  from "./components/AddPost";



function App() {
  
  return (
    
    <div>
    <NavBar/>
    <div>
      <Routes>
        
        <Route exact path="/allposts" element={<AllPosts />} />
        <Route path="/mypost" element={<MyPosts />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </div>
    </div>
    );
  
  
}

export default App;