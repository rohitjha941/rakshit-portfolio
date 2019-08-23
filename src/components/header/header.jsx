import React, { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./header.scss"

export default class Header extends Component {
    render() {
        return (
            <div className = "header">
                <span className = "header-name">
                    <span className = "header-name-first">Rakshit</span>Keswani
                </span>
                <nav> 
                    <NavLink to = "/">Work</NavLink>  
                    <NavLink to = "/about">About</NavLink>
                    <NavLink to = "/resume">Resume</NavLink>
                    <NavLink to = "/contact">Contact</NavLink>
                </nav>
            </div>
        )
    }
}
