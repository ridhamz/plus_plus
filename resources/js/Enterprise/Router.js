import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import HomeEnt from './HomeEnt';
import AddEmp from './AddEmp';
import AllEmp from './AllEmp';
import Profile from './Profile'
export default function AllRouter(){
    return (
             <>

             <Router >
             <Link className="btn btn-primary btn-sm" style={{margin:'5px'}} to="/home">Home</Link>
             <Link className="btn btn-primary btn-sm" style={{margin:'5px'}} to="/addemp">Add Employee</Link>
             <Link className="btn btn-primary btn-sm" style={{margin:'5px'}} to="/allemp">All Employees</Link>
             <Link className="btn btn-primary btn-sm" style={{margin:'5px'}} to="/profile">Enterprise Profile </Link>
             <hr/>

              <Route exact path='/home' component={HomeEnt} />
              <Route exact path='/addemp' component={AddEmp} />
              <Route exact path='/allemp' component={AllEmp} />
              <Route exact path='/profile' component={Profile} />
             </Router>
             </>
           )
}
