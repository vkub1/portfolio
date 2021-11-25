import React from 'react';
import '../assets/css/aboutSection.css'
import { Link } from 'react-router-dom';

const AboutSection = (props) => {
    

    return (
        <>
        <section className="section hidden" id="about-me-section">
            <div id="profile-picture"></div>
            <div id="about-me-text">
                <h2>About Me</h2>
                <p className="body-1">
                    I’m a junior front-end developer looking for a new role in an exciting company. 
                    I focus on writing accessible HTML, using modern CSS practices and writing clean 
                    JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
                    whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
                    and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
                    I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                    you to check out my work.
                </p>
                <Link to="/portfolio"><div id="go-portfolio" className="link button">Go to Portfolio</div></Link>
            </div>
        </section>
        
        </>
    )
}

export default AboutSection;
