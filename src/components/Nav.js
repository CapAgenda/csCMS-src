import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav() {
    
    return ( 
<div className="nav-container">
    <nav>
        <ul className="nav-list">
            <li>
                <NavLink
                 to="/"
                 className={({ isActive }) => (isActive ? "active" : "")}
            
            >
                Home</NavLink>
            </li>
            <li>
            <NavLink
                 to="/about"
                 className={({ isActive }) => (isActive ? "active" : "")}
            
            >
                About</NavLink>
            </li>
            <li>
            <NavLink
                 to="/comiccategories"
                 className={({ isActive }) => (isActive ? "active" : "")}
            
            >
                Categories</NavLink>
            </li>
            <li>
            <NavLink
                 to="/comictags"
                 className={({ isActive }) => (isActive ? "active" : "")}
            
            >
                Tags</NavLink>
            </li>          
        </ul>
    </nav>
</div>
    ) }

export default Nav