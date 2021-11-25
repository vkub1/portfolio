import React from 'react';
import MainImage from './MainImage';
import AboutSection from './AboutSection';

const IndexPage = () => {
    const onToggle = () => {
        const aboutButton = document.querySelector('#about-me')
        console.log(aboutButton)
    }

    return (
        <>
        <MainImage onToggle={onToggle}/>
        <AboutSection onToggle={onToggle} />
        </>
    )
}

export default IndexPage;