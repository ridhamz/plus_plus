import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home';
import SidebarUser from './components/SidebarUser'
import Chat from './components/Chat';

export default function AllRouter(){
    return (
             <>
             <div style={{marginLeft:'0px'}}><SidebarUser /></div>
             <Router >
             <Link style={{marginLeft:'5px'}} className="btn btn-outline-primary btn-sm " to="/home">All Tests</Link>
              <Link style={{marginLeft:'5px'}} className="btn btn-outline-primary btn-sm " to="/chat">Chat</Link>

              <hr />

              <Route exact path='/home' component={Home} />

              <Route exact path='/chat' component={Chat} />
             </Router>
             </>
           )
}
