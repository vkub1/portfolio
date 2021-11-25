import React from 'react';
import TwoCard from './TwoCard';
import '../assets/css/PortfolioPage.css'

const PortfolioPage = () => {

    return(
        <div id="portfolio-page">
            <TwoCard 
                sectionClass="section active"
                sectionName="manage"
                title="Manage"
                body="This project required me to build a fully responsive landing page to the designs provided. 
                I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
                such as the testimonial slider."
                link="/portfolio_detail/manage"
                buttonText="View Project"
                tags="Interaction Design / Front End Development"
                techTags = "HTML / CSS / JS"
                reverse={false}
            />
            <TwoCard 
                sectionClass="section active reverse"
                sectionName="bookmark"
                title="Bookmark"
                body="This project required me to build a fully responsive landing page to the designs provided. I 
                used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such 
                as the features section."
                link="/portfolio_detail/bookmark"
                buttonText="View Project"
                reverse={true}
            />
            <TwoCard 
                sectionClass="section active"
                sectionName="insure"
                title="Insure"
                body="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive 
                landing page. The only JavaScript this project required was to enable the toggling of the 
                mobile navigation."
                link="/portfolio_detail/insure"
                buttonText="View Project"
                reverse={false}
            />
            <TwoCard 
                sectionClass="section active reverse"
                sectionName="fylo"
                title="Fylo"
                body="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and 
                built it so that it was fully-responsive. I took a mobile-first approach and used modern 
                CSS like Flexbox and Grid for layout purposes."
                link="/portfolio_detail/fylo"
                buttonText="View Project"
                reverse={true}
            />
        </div>
    )
    
}

export default PortfolioPage;