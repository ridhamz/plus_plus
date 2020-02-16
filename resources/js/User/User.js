import React from 'react';
import ReactDOM from 'react-dom';
import SidebarUser from './components/SidebarUser';
import GMapDemo from './components/GMapDemo'
import Router from './Router'

function User() {
    return (
        <div className="container">
          <Router />
        </div>
    );
}

export default User;

if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}
