import React, {Component, useState} from "react";
import {HashRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import '../styles/App.css';

export default class App extends Component {
    constructor(props){
        super();
    }
    render() {
        return(
            <HashRouter>
            <div id="main">
            <Link to="/">HOME/</Link>
            <Link to="/about">ABOUT</Link>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                {/* <Route path="/*">
                    No match
                </Route> */}
            </Switch>
            </div>
            </HashRouter>
        )
        
    }
}


