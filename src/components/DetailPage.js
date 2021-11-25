import React, { Component } from 'react';
import '../assets/css/DetailPage.css'
import DetailBody from './DetailBody';


class DetailPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return (
            <>
            <div className="details-image" id={`${this.props.sectionName}-details-picture`}></div>
            <DetailBody
                {...this.props}
            /> 
            <div className="border"></div>
            <div id="project-slider">
                <a href={this.props.previousProjectTitle} className="slider-link link">
                    <div className="slide">
                    <svg xmlns="http://www.w3.org/2000/svg" id="left-arrow" width="10" height="16"><path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/></svg>
                        <div className="slideText">
                            <h3>{this.props.previousProjectTitle}</h3>
                            <p>Previous Project</p>
                        </div>
                    </div>
                </a>
                <hr/>
                <a href={this.props.nextProjectTitle} className="slider-link link">
                    <div className="slide">
                    <div className="slideText">
                        <h3>{this.props.nextProjectTitle}</h3>
                        <p>Next Project</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="right-arrow" width="10" height="16"><path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/></svg>
                </div>
                </a>
            </div>
            <div className="border bottom"></div>  
            </>
        )
    }
    
}

export default DetailPage;