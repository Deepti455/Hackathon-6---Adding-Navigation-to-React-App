import React, {Component, useState} from "react";
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import '../styles/App.css';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
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
            </Switch>
            </div>
            </BrowserRouter>
        )
        
    }
}


export default App;
