import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
            <nav>
                <NavLink className="link" id="home-link" to="home">Home</NavLink>
                <NavLink className="link" id="portfolio-link" to="portfolio">Portfolio</NavLink>
                <NavLink class="link" to="contact" >Contact Me</NavLink>
            </nav>
        </header>
    )
}

export default NavBar;