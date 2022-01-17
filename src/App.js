import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";


import { NavBar } from './components/NavBar';
import { AllPosts } from "./components/AllPost";
import { MyPosts } from "./components/MyPosts";
import { AddPost } from "./components/AddPost";
import { RegPage } from "./components/RegPage";
import { LoginPage } from "./components/LoginPage";



function App() {
  const [user, setUser] = React.useState(null);

  return (

    <div>
      <NavBar user={user} />
      <div>
        <Routes>
          <Route exact path="/allposts" element={<AllPosts />} />
          <Route path="/mypost" element={<MyPosts />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegPage />} />
        </Routes>
      </div>
    </div>
  );


}

export default App;