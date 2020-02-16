import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import axios from 'axios'


export default class DialogDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: false,value:'', Data:''};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

      componentDidMount(){
   axios.get("http://localhost:8000/user_details/"+this.props.id)
     .then(response => {
             this.setState({
                             Data:response.data
                            });
        })
        .catch(error => {
            console.log(error)
        });
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

                <div className="content-section implementation row">
                 <div className='col-md-6'>
                    <Dialog header="Details" visible={this.state.visible} style={{width: '50vw'}} onHide={this.onHide} maximizable>
                        <h1>Session 1</h1>
                         <h6>Problem :{this.state.Data.type_problem}</h6>
                         <h6>Problem Level  :{this.state.Data.level_problem}</h6>
                         <h6>Description :{this.state.Data.description}</h6>
                    </Dialog>
                    <button  className='btn btn-success btn-sm' onClick={this.onClick} >Details</button>
                </div>
                </div>
            </div>
        )
    }
}
