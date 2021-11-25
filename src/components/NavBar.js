import React from 'react';
import logo from '../assets/images/logo.svg'
import '../assets/css/navbar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const expandMenu = () => {
        const links = document.getElementById("myLinks");
        links.classList.toggle('active')
      }
    
    return(
        <>
        <header>
            <img src={logo} alt="logo"></img>
            <nav>
                <NavLink className="link" id="home-link" to="/">Home</NavLink>
                <NavLink className="link" id="portfolio-link" to="portfolio">Portfolio</NavLink>
                <NavLink className="link" to="contact" >Contact Me</NavLink>
            </nav>
            <div className="icon" onClick={expandMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13"><g fill="black" fillRule="evenodd"><path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"/></g></svg>
            </div>
        </header>
        <div id="menu-container">
            <div id="myLinks" className="menu">
                <a href="/" className="link white">Home</a>
                <a href="/portfolio" className="link white">Portfolio</a>
                <a href="/contact" className="link white">Contact Me</a>
            </div>
        </div>
        </>
    )
}

export default NavBar;