import React, { Component } from 'react'
import "./home.scss";
import HomeIllustration from "../../static/home-illustration.png";
import UXInternship from "../../static/Images/UXinternship.png";
import SprintZone from "../../static/Images/Sprint.png";
import TwentyHour from "../../static/Images/24hr.png";
import Aahar from "../../static/Images/AAHAR.png";
import Bookstore from "../../static/Images/Bookstore.png";

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

                        <div className ="home-landing-photo">
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
                                    <a href ="https://medium.com/@rakshitkeswani13/ux-intern-at-furlenco-ed68c80dc9b0" target = "blank"> 
                                        Read medium article ->
                                    </a>
                                </div>
                        </div>
                    </div>


                    <div className = "home-work-unit">
                        <div className = "home-work-pic">
                            <img src = {SprintZone}  alt = "The Sprint Zoetrope"/>
                        </div>
                        <div className = "home-work-details">
                            <div> 
                                <div className = "home-work-title">
                                The Sprint Zoetrope
                                </div>
                                <div className = "home-work-desc">
                                My learnings after reading "The Sprint book" by Jake Knapp & How designers can test their ideas in just 5 days.
                                </div>
                            </div>
                                <div className = "home-work-medium">
                                    <a href ="https://uxplanet.org/design-sprint-ec35329c83a7" target = "blank"> 
                                        Read medium article ->
                                    </a>
                                </div>
                        </div>
                    </div>
                    

                    <div className = "home-work-unit">
                        <div className = "home-work-pic">
                            <img src = {TwentyHour}  alt = "The 24hr UX Challenge"/>
                        </div>
                        <div className = "home-work-details">
                            <div> 
                                <div className = "home-work-title">
                                The 24hr UX Challenge
                                </div>
                                <div className = "home-work-desc">
                                To design a chat experience for a medical website. I was assigned challenges I needed to solve for within restricted time.
                                </div>
                            </div>
                                <div className = "home-work-medium">
                                    <a href ="https://medium.com/design-studio-iit-roorkee/the-24hr-ux-challenge-91961a5cb388" target = "blank"> 
                                        Read medium article ->
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div className = "title" style = {{"marginTop" : "5em"}}>
                        <span> Work: </span> Projects
                    </div>


                    <div className = "home-work-unit">
                        <div className = "home-work-pic">
                            <img src = {Aahar}  alt = "AAHAR: UX Research"/>
                        </div>
                        <div className = "home-work-details">
                            <div> 
                                <div className = "home-work-title">
                                AAHAR: UX Research
                                </div>
                                <div className = "home-work-desc">
                                Designing a system to distribute the un-eaten mess food to poor construction workers residing outside the campus.
                                </div>
                            </div>
                                <div className = "home-work-medium">
                                    <a href ="https://www.behance.net/gallery/75867469/Aahar-UX-System-design" target = "blank"> 
                                    View Behnace Project ->
                                    </a>
                                </div>
                        </div>
                    </div>

                    <div className = "home-work-unit">
                        <div className = "home-work-pic">
                            <img src = {Bookstore}  alt = "BLUEBOOKS: bookstore app"/>
                        </div>
                        <div className = "home-work-details">
                            <div> 
                                <div className = "home-work-title">
                                BLUEBOOKS: bookstore app
                                </div>
                                <div className = "home-work-desc">
                                Competing in a challenge for generating concepts for a Bookstore app.
                                </div>
                            </div>
                                <div className = "home-work-medium">
                                    <a href ="https://dribbble.com/shots/6959114-Bookstore-App" target = "blank"> 
                                    View Dribbble Shot ->
                                    </a>
                                </div>
                        </div>
                    </div>

                    </div>
            </div>
        )
    }
}
