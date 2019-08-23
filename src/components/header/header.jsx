import React, { Component } from 'react';
import {NavLink } from "react-router-dom"
import "./header.scss"

export default class Header extends Component {
    render() {
        return (
            <div className = "header">
                <NavLink to = "/"> 
                    <span className = "header-name">
                        <span className = "header-name-first">Rakshit</span>Keswani
                    </span>
                </NavLink>
                <nav> 
                    <NavLink exact = {true} to = "/">Work</NavLink>  
                    <NavLink to = "/about">About</NavLink>
                    <NavLink to = "/resume">Resume</NavLink>
                    <NavLink to = "/contact">Contact</NavLink>
                </nav>
            </div>
        )
    }
}
