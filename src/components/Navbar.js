import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return(
     <div>
    <NavLink exact to="/">View List</NavLink>
    <NavLink to="/findItems">Find Items</NavLink>
</div>   
    )
} 


export default NavBar;