import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'

function Doctor() {
    return (
        <div className="container">
         <Router />
      </div>
    );
}

export default Doctor;

if (document.getElementById('doctor')) {
    ReactDOM.render(<Doctor/>, document.getElementById('doctor'));
}
