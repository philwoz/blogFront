import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/restaurants" className="navbar-brand">
                BlogStars
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/allposts"} className="nav-link">
                        All Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/mypost"} className="nav-link">
                        My Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/addpost"} className="nav-link">
                        Add Posts
                    </Link>
                </li>
                {/* <li className="nav-item" >
            {user ? (
              <button onClick={logout} className="nav-link" style={{ cursor: 'pointer' }}>
                Logout {user.name}
              </button>
            ) : (
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            )}

          </li> */}
            </div>
        </nav>
    )
};