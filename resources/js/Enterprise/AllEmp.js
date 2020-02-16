import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AlertMessage from './AlertMessage';
import axios from 'axios';
import Pagination from 'react-js-pagination'
import DialogDemo from './DialogDemo'


export default class Allmp extends Component{
         constructor(){
        super()
      this.handlePageChange=this.handlePageChange.bind(this);
        this.state={
            Data:[],
            activePage:1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3,
            alert_message:'',
            restName:''
        }}
            componentDidMount(){
   axios.get("http://localhost:8000/Users")
     .then(response => {
             this.setState({
                             Data:response.data.data,
                             activePage:response.data.current_page,
                             itemsCountPerPage:response.data.per_page,
                             totalItemsCount:response.data.total
                            });
        })
        .catch(error => {
            console.log(error)
        });
    }
        handlePageChange(pageNumber) {
        // console.log(`active page is ${pageNumber}`);
         //this.setState({activePage: pageNumber});
         axios.get("http://localhost:8000/allorders?page="+pageNumber)
         .then(response=>{
              this.setState({
                                     Data:response.data.data,
                                     activePage:response.data.current_page,
                                     itemsCountPerPage:response.data.per_page,
                                     totalItemsCount:response.data.total
                                 });
         }).catch(error => {
             console.log(error)
         });}

      delete(id){
        axios.post('http://localhost:8000/addtomyorderes/'+id)
        .then(res => {
            axios.get("http://localhost:8000/allorders")
            .then(response => {
                    this.setState({
                                    Data:response.data.data,
                                    activePage:response.data.current_page,
                                    itemsCountPerPage:response.data.per_page,
                                    totalItemsCount:response.data.total
                                   });
               })
            this.setState({alert_message:'success'})
        })
    }


    render(){
        return (
             <div className='col-md-8'>
         {this.state.alert_message == 'success' ? <AlertMessage message={'Added with successfully'}/>:null}
         <h2>All Employees :</h2>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created at</th>
            <th scope="col">Details</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>

        {
            this.state.Data.map((data,i) =>{
                      return (
                           <tr key={i}>
                                <td key={i+1}>{i}</td>
                                <td key={i+3}>{data.name}</td>
                                <td key={i+7}>{data.email}</td>
                                <td key={i+4}>{data.created_at}</td>
                                <td key={i+6}>
                                 <DialogDemo key={i+8} id={data.id} />
                                 </td>
                                   <td key={i+9}>
                                 <button className="btn btn-danger btn-sm"
                                 onClick={this.delete.bind(this,data.id)}
                                > Delete</button></td>
                           </tr>)
                      })
        }

        </tbody>
      </table>
      <div className="d-flex justify-content-center">
      <Pagination
      activePage={this.state.activePage}
      itemsCountPerPage={this.state.itemsCountPerPage}
      totalItemsCount={this.state.totalItemsCount}
      pageRangeDisplayed={this.state.pageRangeDisplayed}
      onChange={this.handlePageChange}
      itemClass='page-item'
      linkClass='page-link'
    />
    </div>
     </div>
        )
    }

}
