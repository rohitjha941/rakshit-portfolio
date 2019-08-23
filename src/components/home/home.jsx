import React, { Component } from 'react'
import "./home.scss";
import HomeIllustration from "../../static/home-illustration.png";
import UXInternship from "../../static/Images/UXinternship.png";
export default class Home extends Component {
    render() {
        return (
            <div className="home"> 
                    <div className="home-landing">

                        <div className = "home-landing-1">
                            <div className = "home-landing-title">Product Designer</div>

                            <div className = "home-landing-desc">
                                Hello, I am Rakshit a product designer from  IIT Roorkee. I am a self-taught designer with great enthusiasm for digital products that make things better and improves the human experience. 
                            </div>

                            <div className = "home-landing-work">
                            View Work

                            </div>
                        </div>

                        <div>
                            <img src = {HomeIllustration} alt = "Home Illustration" />
                        </div>



                    </div>
            
            
            
                    <div className = "home-work">
                    <div className = "title">
                        <span> Work: </span> Case Studies
                    </div>

                    <div className = "home-work-unit">
                        <div className = "home-work-pic">
                            <img src = {UXInternship}  alt = "UX Internship"/>

                        </div>

                        <div className = "home-work-details">
                            <div> 
                                <div className = "home-work-title">

                                UX internship at Furlenco
                                </div>

                               
                                <div className = "home-work-desc">

                                Key learnings from my summer internship at Furlenco, tasks performed by me & how I evolved into a better designer.
                                </div>
                            </div>
                                <div className = "home-work-medium">

                                Read medium article ->
                                </div>
                                
                        </div>


                    </div>
                    
                    </div>
            </div>
        )
    }
}
