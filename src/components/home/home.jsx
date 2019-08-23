import React, { Component } from 'react'
import "./home.scss";
import HomeIllustration from "../../static/home-illustration.png";
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
            </div>
        )
    }
}
