import React, { useEffect } from 'react';
import TextCard from './TextCard';
import '../assets/css/DetailBody.css'

const DetailBody = (props) => {

    useEffect(() => {
        document.querySelectorAll("p.hidden").forEach((element) => {
            element.classList.remove('hidden')
        })
    }, [])

    return(
        <>
        <section id="detail-body">
            <TextCard 
                {...props}
            />
            <div className="project-background">
                <div id="project-background-text">
                    <h3>Project Background</h3>
                    <p className="body-1" >
                        {props.projectBackground}
                    </p>
                </div>
                <div id="static-previews">
                    <h3>Static Previews</h3>
                    <div className="static-preview" id={`${props.sectionName}-static-1`}></div>
                    <div className="static-preview" id={`${props.sectionName}-static-2`}></div>
                </div>
                
            </div>
        </section>
        
        </>

    )
}

export default DetailBody;