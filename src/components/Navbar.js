import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {



    return(
        <div className="header_container">
            <div>
                <h1>My Grocery List</h1>
            </div>
            <div>
                <NavLink exact to="/">View List</NavLink>
                <NavLink to="/findItems">Find Items</NavLink>
                <button onClick={(e) => {console.log("loggin in")}}>Link</button>
            </div>   
        </div>
    
    )
} 


export default NavBar;