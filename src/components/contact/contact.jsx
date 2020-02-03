import React, { Component } from 'react';
import "./contact.scss";
import FaceBook from "../../static/Icons/facebook.png";
import Dribbble from "../../static/Icons/dribbble.png";
import Behance from "../../static/Icons/behance.png";
import Linkedin from "../../static/Icons/linkedin.png";
import Medium from "../../static/Icons/Path.png";



export default class Contact extends Component {
    render() {
        return (
            <div className ="contact">
                <div className ="contact-details">
                    <div className = "contact-coffee">
                    Coffee?
                    </div>
                    <div className = "contact-desc">
                    Have a project or opportunity for me, do say Hi
                    </div>

                    <div className = "contact-title">
                    Email
                    </div>

                    <div className = "contact-email-address">
                    rkeswani@mt.iitr.ac.in
                    </div>

                    <div  className = "contact-title">
                    Find me on
                    </div>

                    <div className  = "conact-array">
                        <a href = "https://medium.com/@rakshitkeswani13" target = "blank"> 
                            <img src = {Medium} alt  = "Medium" className = "icons" /> 
                        </a>

                        <a href = "https://www.linkedin.com/in/rakshit-keswani" target = "blank"> 
                            <img src = {Linkedin} alt  = "Linkedin" className = "icons" /> 
                        </a>

                        <a href = "https://www.facebook.com/rakshit.keswani" target = "blank"> 
                            <img src = {FaceBook} alt  = "Facebook" className = "icons" /> 
                        </a>

                        <a href = "https://dribbble.com/RakshitK" target = "blank"> 
                            <img src = {Dribbble} alt  = "Dribbble" className = "icons" /> 
                        </a>

                        <a href = "https://www.behance.net/rakshitkes3b15" target = "blank"> 
                            <img src = {Behance} alt  = "Behance" className = "icons" /> 
                        </a>
                    </div>
                </div>

                <div className ="contact-form">
                    <form netlify method = "POST">
                        <label>Your Email:</label>
                        <input type = "email" name = "email" required />

                        <label>Subject:</label>
                        <input type = "text" name = "subject" required/>

                        <label>Message:</label>
                        <textarea  rows = "5" name = "subject" required />

                        <button type = "submit" > Submit </button>

                    </form>

                </div>
            </div>
        )
    }
}
