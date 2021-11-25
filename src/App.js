
import './assets/css/font.css';
import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import IndexPage from './components/IndexPage';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import NavBar from './components/NavBar';
import BottomNav from './components/BottomNav';

import DetailPage from './components/DetailPage';


const App = (props) => {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/portfolio" element={<PortfolioPage />}/>
          <Route path="/portfolio_detail/manage" 
            element={
      
            <DetailPage 
              sectionName="manage"
              className="section active"
              title="Manage"
              body="This project required me to build a fully responsive landing page to the designs provided. 
              I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, 
              such as the testimonial slider."
              projectBackground="This project was a front-end challenge from Frontend Mentor. It’s a platform that 
              enables you to practice building websites to a design and project brief. Each challenge 
              includes mobile and desktop designs to show how the website should look at different 
              screen sizes. Creating these projects has helped me refine my workflow and solve 
              real-world coding problems. I’ve learned something new with each project, helping 
              me to improve and adapt my style."
              link="/"
              previousProjectTitle="Fylo"
              nextProjectTitle="Bookmark"
              previousProjectLink = "/portfolio_detail/fylo"
              nextProjectLink = "/portfolio_detail/bookmark"
              tags="Interaction Design / Front End Development"
              techTags="HTML / CSS / JS"
              buttonText="Visit Website"
              reverse={true}
            />}/>
            <Route path="/portfolio_detail/bookmark" 
            element={
            <DetailPage 
              sectionName="bookmark"
              className="section active"
              title="Bookmark"
              body="This project required me to build a fully responsive landing page to the designs 
              provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
              required interactivity, such as the features section."
              projectBackground="This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
              enables you to practice building websites to a design and project brief. Each challenge 
              includes mobile and desktop designs to show how the website should look at different 
              screen sizes. Creating these projects has helped me refine my workflow and solve 
              real-world coding problems. I’ve learned something new with each project, helping 
              me to improve and adapt my style."
              link="/"
              tags="Interaction Design / Front End Development"
              techTags="HTML / CSS / JS"
              buttonText="Visit Website"
              reverse={true}
              previousProjectTitle="Manage"
              nextProjectTitle="Insure"
              previousProjectLink = "/portfolio_detail/manage"
              nextProjectLink = "/portfolio_detail/insure"
            />}/>
            <Route path="/portfolio_detail/insure" 
            element={
            <DetailPage 
              sectionName="insure"
              className="section active"
              title="Insure"
              body="This was a small project which mostly consisted of HTML and CSS. I built a 
              fully-responsive landing page. The only JavaScript this project required was 
              to enable the toggling of the mobile navigation.."
              link="/"
              tags="Interaction Design / Front End Development"
              techTags="HTML / CSS / JS"
              buttonText="Visit Website"
              reverse={true}
              previousProjectTitle="Bookmark"
              nextProjectTitle="Fylo"
              previousProjectLink = "/portfolio_detail/bookmark"
              nextProjectLink = "/portfolio_detail/fylo"
            />}/>
            <Route path="/portfolio_detail/fylo" 
            element={
            <DetailPage 
              sectionName="fylo"
              className="section active"
              title="Fylo"
              body="This project was built in pure HTML and CSS. I had mobile and desktop designs to 
              work to and built it so that it was fully-responsive. I took a mobile-first approach 
              and used modern CSS like Flexbox and Grid for layout purposes."
              link="/"
              tags="Interaction Design / Front End Development"
              techTags="HTML / CSS"
              buttonText="Visit Website"
              reverse={true}
              previousProjectTitle="Insure"
              nextProjectTitle="Manage"
              previousProjectLink = "/portfolio_detail/insure"
              nextProjectLink = "/portfolio_detail/manage"
            />}/>

        </Routes>
        <BottomNav />
      </BrowserRouter>
  );
}


export default App;
