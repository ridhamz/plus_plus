import React,{Component} from 'react';



export default class Profile extends Component{
  constructor(){
      super()
      this.state = {Data:''}
  }

            componentDidMount(){
   axios.get("http://localhost:8000/userinfo")
     .then(response => {
             this.setState({
                             Data:response.data.data,

                            });
        })
        .catch(error => {
            console.log(error)
        });
    }
  render(){
      return(
          <div>
           <h5>Name  : ArabSoft </h5>
           <h5>Email : arabsoft@arabsoft.com </h5>
           <h5>Adress: tunis  </h5>
           <h5>Description : software developpement enterprise </h5>
          </div>
      )
  }

}
