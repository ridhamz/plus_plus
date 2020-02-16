import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import Chat from './Chat'

export default class DialogDemo extends Component {

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
        const footer = (
            <div>

            </div>
        );

        return (
            <div>

                <div className="content-section implementation row">
                 <div className='col-md-6'>
                    <Dialog header="Call " visible={this.state.visible} style={{width: '50vw'}} onHide={this.onHide} maximizable>
                        <Chat />
                       </Dialog>
                     <hr/>
                    <button  className='btn btn-success' onClick={this.onClick} >Make Call</button>
                </div>
                </div>
            </div>
        )
    }
}
