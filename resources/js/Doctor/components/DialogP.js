import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';

export default class DialogP extends Component {

    constructor() {
        super();
        this.state = {visible: false,value:''};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {

        return (
            <div>

                <div className="content-section implementation">
                    <Dialog header="Edit Your Profile " visible={this.state.visible} style={{width: '50vw'}}  onHide={this.onHide} maximizable>

        <span>NAME :</span>
        <input className="form-control" type="text" placeholder="name" />
        <br/>
        <span>EMAIL:</span>
        <input className="form-control" type="text" placeholder="@"/>
        <br/>
        <button type="button" className="btn btn-success btn-lg btn-block">UPDATE</button>
                    </Dialog>

                    <button  className='btn btn-success btn-sm' onClick={this.onClick} >Edit Profile</button>
                </div>
            </div>
        )
    }
}
