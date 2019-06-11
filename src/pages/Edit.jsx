import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.putDeadline = this.putDeadline.bind(this);
    this.delDeadline = this.delDeadline.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }
  putDeadline(field, value, callback) {
    const formBody = encodeURIComponent(field) + '=' + encodeURIComponent(value);
    fetch('https://nodedue.mohole.it/deadlines/'+this.props.values.id, {
      method: 'PUT',
      body: formBody,
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('authToken'),
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((response) => {
        callback(response);
    })
    .catch(error=> console.error('Error:', error));
  }
  submitChange(field, value){
    if(!field || !value || field==='' || value===''){
      alert('Insert a value to edit.');
    } else{
      this.putDeadline(field, value, (response)=>{
        this.changeView('success');
      });
    }
  }


  delDeadline() {
    fetch('https://nodedue.mohole.it/deadlines/'+this.props.values.id, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('authToken'),
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((response) => {
        this.changeView('success');
    })
    .catch(error=> console.error('Error:', error));
  }

  changeView = (a,b='',c='',d='',e='') => {
    this.props.changeView(a,b,c,d,e);
  }
  calculateDaysLeft(date, period){
    let today = new Date();
    let deadL = new Date(date);
    let msPerDay = 24 * 60 * 60 * 1000 ;
    let timeLeft = (deadL.getTime() - today.getTime());
    
    let e_daysLeft = timeLeft / msPerDay;
    let daysLeft = Math.floor(e_daysLeft);
    
    let past = daysLeft<=0?true:false;
    daysLeft=past?daysLeft+period:daysLeft;
    return daysLeft;
  }
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
          <img src={back} onClick={()=>this.changeView('browseCategory', this.props.category, this.props.Subcategory)} alt="back" />
        </div>
        
        <h1>EDIT</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3 className="mb-5">{this.props.category}</h3>

        <h6>Subcategory</h6>
        <hr />
        <h3 className="mb-5"><input className='subInput' type="text" placeholder={this.props.subcategory} onBlur={()=>this.submitChange('Subcategory', document.querySelector('input.subInput').value)} /></h3>
        
        <h6>Deadline</h6>
        <hr/>
        <h3 className="mb-5"><input type="date" className="ml-5 datInput" defaultValue={new Date(this.props.values.date).toLocaleDateString('en-CA')} onBlur={()=>this.submitChange('date', document.querySelector('input.datInput').value)} /></h3>

        <h6>Choose the time</h6>
        <hr />
        <h3 className="mb-5"><input className="periodInput" type="number" defaultValue={this.props.values.days_period} onBlur={()=>this.submitChange('days_period', document.querySelector('input.periodInput').value)} /></h3>

        <h6>Days Left</h6>
        <hr />
        <h3 className="mb-5">{this.calculateDaysLeft(this.props.values.date, this.props.values.days_period)}</h3>
    </div>


        
<button className="btn btn-1" onClick={this.delDeadline}><h3 className="create">DELETE</h3></button>
        
          </div>
        </>
      );
    }
  }
  export default Edit;