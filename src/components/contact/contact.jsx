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
                       
                    <a
                    href="https://medium.com/@rakshitkeswani13"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      src={require("../../static/icons2/medium.png")}
                      alt="Medium"
                    />
                  </a>
      
                  <a
                    href="https://www.linkedin.com/in/rakshit-keswani"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={require("../../static/icons2/linkedin.png")} alt="" />
                  </a>
                  
                  <a
                    href="https://dribbble.com/RakshitK"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={require("../../static/icons2/dribble.png")} alt="" />
                  </a>
                    </div>
                </div>

                <div className ="contact-form">
                    <form method="POST" data-netlify="true" name="contact">
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
