import React from 'react';
import "../assets/css/TextCard.css"
import { Link } from 'react-router-dom';


const TextCard = (props) => {
    if (!props.reverse) {
        return (
            <div id={`${props.sectionName}-text`} className="text-card">
                <h2>{props.title}</h2>
                <p className="body-1" id="card-text">
                    {props.body}
                </p>
                <p className="body-1 cyan hidden">{props.tags}</p>
                <p className="body-1 cyan hidden">{props.techTags}</p>
                <Link to={props.link}><div id={`go-${props.ButtonText}`} className="link button">{props.buttonText}</div></Link>
            </div>
        )
    } else {
        return(
            <div id={`${props.sectionName}-text`} className="reverse text-card">
                <h2>{props.title}</h2>
                <p className="body-1" id="card-text-reverse">
                    {props.body}
                </p>
                <p className="body-1 cyan hidden">{props.tags}</p>
                <p className="body-1 cyan hidden">{props.techTags}</p>
                <Link to={props.link}><div id={`go-${props.buttonText}`} className="link button">{props.buttonText}</div></Link>
            </div>
        )
        
    }
}

export default TextCard;