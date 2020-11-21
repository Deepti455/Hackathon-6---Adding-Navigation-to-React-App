import React, {Component, useState} from "react";
import {BrowserRouter, Link, Route, Switch, withRouter} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import '../styles/App.css';


class App extends Component {
    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   }
    render() {
        // const { match, location, history } = this.props
        return(
            <BrowserRouter>
            
            <div id="main">
            {/* <div>{location.pathname}</div> */}
            <Link to="/">HOME/</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/about">Contact-Us</Link>
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


export default withRouter(App);
