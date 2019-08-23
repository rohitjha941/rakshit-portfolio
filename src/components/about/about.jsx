import React, { Component } from 'react';
import "./about.scss";
import Hobbies from "../../static/hobbies.png"

export default class About extends Component {
    render() {
        return (
            <div className = "about-parent">
                <div className ="about">
                        <div className = "about-desc">
                            <div className = "about-desc-title">
                            Hola!
                            </div>

                            <div className = "about-desc-more">
                            I am Rakshit Keswani, a pre-final year student at IIT Roorkee. I am interested in the field of Product Design and I enjoy crafting experiences to improve human life. I have been working towards my dream of becoming a full-time product designer since the past year & I am looking for opportunities to improve my skills in the same.
                            </div>
                        </div>


                </div>

                <div className = "title about-title">
                    <h2>Things I like apart from Design</h2>
                </div>

                <img src = {Hobbies} alt = "hobbies" />
            </ div>
        )
    }
}
