import React, { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./header.scss";
import Resume from "../../static/resume.pdf";
import { NavHashLink as Link } from 'react-router-hash-link';

export default class Header extends Component {
    componentDidMount(){
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
                <Link smooth = {true} exact = {true} to = "/#landing">
                    <span className = "header-name">
                        <span className = "header-name-first">Rakshit</span>Keswani
                    </span>
                </Link>
                <nav> 
                    <Link smooth = {true}   to = "/#work">Work</Link>  
                    <NavLink to = "/about">About</NavLink>
                    <a href = {Resume} target = "blank">Resume</a>
                    <NavLink to = "/contact">Contact</NavLink>
                </nav>
            </div>
        )
    }
}
