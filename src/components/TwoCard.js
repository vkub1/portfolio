import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/TwoCard.css'
import TextCard from './TextCard';

const TwoCard = (props) => {
    if (!props.reverse) {
        return(
            <section className={props.sectionClass} id={`${props.sectionName}-section-reverse`}>
                <div id={`${props.sectionName}-picture`} className="picture-card"></div>
                <TextCard 
                    sectionName={props.sectionName}
                    title={props.title}
                    body={props.body}
                    link={props.link}
                    buttonText={props.buttonText}
                    reverse={props.reverse}
                />
            </section>
        )
    } else {
        return(
            <section className={props.sectionClass} id={`${props.sectionName}-section`}>
                <TextCard 
                    sectionName={props.sectionName}
                    title={props.title}
                    body={props.body}
                    link={props.link}
                    buttonText={props.buttonText}
                    reverse={props.reverse}
                />
                <div id={`${props.sectionName}-picture`} className="reverse picture-card"></div>
            </section>
        )
    }
    
   
}

export default TwoCard;