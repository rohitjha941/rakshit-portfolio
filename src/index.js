import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';

import  { Component } from 'react';
import Header from "./components/header/header";
import About from './components/about/about';
import Home from './components/home/home';
import "./index.scss";

import {HashRouter as Router, Route } from "react-router-dom";
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import ScrollToTop from "./components/scroll/scroll";
export default class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop> 
                    <Header />
                        <Route path = "/" component = {Home} exact = {true} />
                        <Route path = "/about" component = {About} />
                        <Route path = "/contact" component = {Contact} />
                    <Footer />
                </ScrollToTop>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
