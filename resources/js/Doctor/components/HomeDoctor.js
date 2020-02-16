import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/accordion';
import axios from 'axios'
import DialogDemo from './DialogDemo';
import DialogP from './DialogData';
import DialogData from './DialogData';


export default class Home extends Component{

  constructor(){
      super()
      this.state = {Data : []}
  }

     componentDidMount(){
      axios.get("http://localhost:8000/allusers")
         .then(response => {
             this.setState({Data:response.data})
        })
        .catch(error => {
            console.log(error)
        });}


  render(){
    return(
        <div>
        <div >
<Accordion multiple={true}>
  {
      this.state.Data.map((data,i)=> {

      return(
      <AccordionTab header={data.name} key={i}>
         <h5>Name : {data.name}</h5>
         <h5>Email: {data.email}</h5>
         <h5>Enterprise : {data.enterprise_name}</h5>
         <DialogDemo /><br/>
         <DialogData />
    </AccordionTab>
    )})

  }
</Accordion>
</div>
  </div>
    )
}
}
