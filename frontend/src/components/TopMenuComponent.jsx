import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MainComponent from './MainComponent';
import DashboardComponent from './DashboardComponent';
import HomeComponent from './HomeComponent';

class TopMenuComponent extends Component {
    render () {
        return (
            <Router>
                <Navbar bg="dark" variant="dark" className="mb-4">
                    <Navbar.Brand href="/hello">
                        Home
                    </Navbar.Brand>
                    <Navbar.Brand href="/main">
                        Main
                    </Navbar.Brand>
                    <Navbar.Brand href="/dashboard">
                        Dashboard
                    </Navbar.Brand>
                </Navbar>

                <Route path="/hello" component={HomeComponent}/>
                <Route path="/main" component={MainComponent}/>
                <Route path="/dashboard" component={DashboardComponent}/>
                
            </Router>
        )
    }
}

export default TopMenuComponent;