import React from 'React';
import ReactDOM from 'react-dom';
import Router from './Router'

export default function Ent(){

    return(
        <div className="container">
        <Router />
        </div>
    )
}

if (document.getElementById('enterp')) {
    ReactDOM.render(<Ent/>, document.getElementById('enterp'));
}
