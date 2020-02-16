import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import HomeDoctor from './components/HomeDoctor';
import SidebarUser from './components/SidebarUser';

export default function AllRouter(){
    return (
             <>
             <div style={{marginLeft:'1050px'}}><SidebarUser /></div>
             <Router >
             <hr/>

              <Route exact path='/home' component={HomeDoctor} />
             </Router>
             </>
           )
}
