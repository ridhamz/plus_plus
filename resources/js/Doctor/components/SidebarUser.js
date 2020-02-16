import React, {Component} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';

import DialogP from './DialogP'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CardDemo from './CardDemo';

export default class SidebarUser extends Component {

    constructor() {
        super();
        this.state = {
            visibleRight: false,

        }
    }

    render() {
        return (
            <div>


                <div>

<Sidebar visible={this.state.visibleRight} position="right" baseZIndex={1000000} onHide={(e) => this.setState({visibleRight: false})}>
        <h1 style={{fontWeight:'normal'}}>User Profile</h1>

        <CardDemo />
         <DialogP />
    </Sidebar>


     <button className="btn btn-primary btn-sm" onClick={(e) => this.setState({visibleRight:true})}>
             Profile
           </button>


                </div>



            </div>
        )
    }
}
