import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import Chat from './Chat'
import axios from 'axios'

export default class DialogData extends Component {

    constructor() {
        super();
        this.state = {visible: false,value:'',t1:[],t2:[],t3:''};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

      onSubmit(e){
        e.preventDefault();
        const apps = {
            t1:this.state.t1,
            t2:this.state.t2,
            t3:this.state.t3,
            alertMessage:'success'
        }
                axios.post('http://localhost:8000/addfeedback',apps)
            .then(res => this.setState({
                alertMessage:'success',
                t1:'',
                t2:'',
                t3:'',
                         }))
                         }

    render() {


        return (
            <div>

                <div className="content-section implementation">
             <Dialog header="FEEDBACKS" visible={this.state.visible} style={{width: '50vw'}} onHide={this.onHide} maximizable>
                {this.state.alertMessage == 'success' ? <div  className='alert alert-success'> added successfully</div>:null}
            <div className="card text-center">
            <div className="card-body" id="container-color">
                <br/>
                <form onSubmit={this.onSubmit}>
                <h3 className="card-text">Type of problem : </h3>
                <br/>
                <h6>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                         onChange={e=>this.setState({t1:[...this,"Depression"]})} value="Depression"/>
                        <label className="form-check-label" forhtml="inlineCheckbox1"
                       >Depression</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                        onChange={e=>this.setState({t1:[...this,"Stress"]})} value="Stress"/>
                        <label className="form-check-label" forhtml="inlineCheckbox2"
                         >Stress</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                        onChange={e=>this.setState({t1:[...this,"Loneliness"]})} value="Loneliness"/>
                        <label className="form-check-label" forhtml="inlineCheckbox3">Loneliness</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox4"
                         onChange={e=>this.setState({t1:[...this,"Loneliness"]})} value="Loneliness"/>
                        <label className="form-check-label" forhtml="inlineCheckbox4">Other</label>
                    </div>


                </h6>
                <br/> <br/>
                <h3 className="card-text">Problem level: </h3> <br/>


                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                         onChange={e=>this.setState({t2:[...this,"Simple"]})} value="Simple"/>
                    <label className="form-check-label" forhtml="inlineRadio1"> Simple </label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                          onChange={e=>this.setState({t2:[...this,"Meduim"]})} value="Meduim"/>
                    <label className="form-check-label" forhtml="inlineRadio1"> Meduim </label>
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                        onChange={e=>this.setState({t2:[...this,"Hard"]})} value="Hard"/>
                    <label className="form-check-label" forhtml="inlineRadio1"> Hard</label>
                </div>
                <h3 className="card-text">Descritption : </h3> <br/>

                <div className="form-group">

                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                     value={this.state.t3} onChange={e=>this.setState({t3:e.target.value})}></textarea>
                </div>
                 <button className="btn btn-primary btn-sm">Send</button>
                </form>
            </div>

        </div>
     </Dialog>

    <button  className='btn btn-primary btn-sm' onClick={this.onClick} >Feedbacks</button>
    </div>
 </div>

        )
    }
}
