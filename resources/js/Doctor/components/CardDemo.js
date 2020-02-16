import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import axios from 'axios'

export default class CardDemo extends Component {

      constructor(){
          super();
          this.state ={Data:''}
      }

      componentDidMount(){
   axios.get("http://localhost:8000/userinfo")
     .then(response => {
             this.setState({
                             Data:response.data
                            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    render() {
        const header = (
            <img alt="Card" style={{width:'150px',height:'150px'}} src={this.state.Data.profile_photo}/>
        );
        return (
            <div>

                <div className="content-section implementation">
                    <Card
                     style={{width: '360px'}} className="ui-card-shadow"
                      header={header}>
                        <div>
                            <h5>Name : {this.state.Data.name}</h5>
                            <h5>Email : {this.state.Data.email}</h5>
                            <h5></h5>
                         </div>
                    </Card>
                </div>
            </div>
        )
    }
}
