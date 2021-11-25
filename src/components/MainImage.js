import React from 'react';
import downArrows from '../assets/images/down-arrows.svg'
import '../assets/css/mainImage.css'
import image from '../assets/images/mobile/image-homepage-hero.jpg'

const MainImage = (props) => {
    const toggleAbout = () => {
        const aboutMe = document.querySelector('#about-me-section');
        aboutMe.classList.toggle('hidden')
    }

    const mouseEnter = (event) => {
        event.currentTarget.classList.add('hover')
        const iconDiv = document.querySelector('#down-arrows');
        iconDiv.classList.add('hover')
    }

    const mouseLeave = (event) => {
        event.currentTarget.classList.remove('hover')
        const iconDiv = document.querySelector('#down-arrows');
        iconDiv.classList.remove('hover')
    }

    return (
        <>
        <img className="mobile-image mobile" src={image}></img>
        <div className="intro-text mobile">
                <h1>Hey, I’m Vladimir Kubliy and I love building beautiful websites</h1>
                <div id="about-me" onClick={toggleAbout} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <div id="down-arrows"><img id="down-arrows-icon" src={downArrows} alt="down arrows" /></div>
                    
                    <p className="link white">About me</p>
                </div>
        </div>
        <section className="main-image">
            <div className="intro-text">
                <h1>Hey, I’m Vladimir Kubliy and I love building beautiful websites</h1>
                <div id="about-me" onClick={toggleAbout} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                    <div id="down-arrows"><img id="down-arrows-icon" src={downArrows} alt="down arrows" /></div>
                    
                    <p className="link white">About me</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MainImage;