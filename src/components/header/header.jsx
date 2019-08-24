import React, { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./header.scss";
import Resume from "../../static/resume.pdf"

export default class Header extends Component {
    componentDidMount(){
        var height = document.getElementById("header").offsetHeight;
        height = height + "px";
        document.getElementById("body").style.paddingTop = height;
        window.onscroll = function() {
            if (window.pageYOffset === 0) {
              document.getElementById("header").classList.remove("scroll");
            } else {
              document.getElementById("header").classList.add("scroll");
            }
          };
    }
    render() {
        return (
            <div className = "header" id = "header">
                <NavLink to = "/"> 
                    <span className = "header-name">
                        <span className = "header-name-first">Rakshit</span>Keswani
                    </span>
                </NavLink>
                <nav> 
                    <NavLink exact = {true} to = "/">Work</NavLink>  
                    <NavLink to = "/about">About</NavLink>
                    <a href = {Resume} target = "blank">Resume</a>
                    <NavLink to = "/contact">Contact</NavLink>
                </nav>
            </div>
        )
    }
}
