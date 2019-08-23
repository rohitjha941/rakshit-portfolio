import React, { Component } from 'react';
import "./contact.scss";
import FaceBook from "../../static/Icons/facebook.png";
import Dribbble from "../../static/Icons/dribbble.png";
import Behance from "../../static/Icons/behance.png";
import Linkedin from "../../static/Icons/linkedin.png";



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

                    <div style = {{"marginTop" : "2rem"}} className = "contact-title">
                    Find me on
                    </div>
                </div>

                <div className ="contact-form">
                    <form>
                        <label>Your Email:</label>
                        <input type = "email" name = "email" />

                        <label>Subject:</label>
                        <input type = "text" name = "subject" />

                        <label>Message:</label>
                        <textarea  rows = "5" name = "subject" />

                    </form>

                </div>
            </div>
        )
    }
}
