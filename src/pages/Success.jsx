import React from "react";
import tick from "../img/tick.png";
import { Redirect } from 'react-router-dom';


let user_id = localStorage.getItem('userId');
let token = localStorage.getItem('authToken');
// let username = localStorage.getItem('username');

class Success extends React.Component {
  state = {
    redirect: false
  }

  constructor() {
		super();
    this.checkDeadlines = this.checkDeadlines.bind(this);
  }


  checkDeadlines(callback) {
    fetch('https://nodedue.mohole.it/deadlines?user_id='+user_id, {
      method: 'GET',
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    'Authorization': 'Bearer ' + token,
      }
    })
    .then(response => response.json())
    .then((response) => {
      callback(response);
    })
    .catch(()=> alert('Error fetching data: please reload the page.'));
  }
    render() {
      setTimeout(() => {
        this.checkDeadlines((response)=>{
          this.setState({
            deadlines: response,
            redirect: response[0]?'hasDeadlines':'noDeadlines'
          });
        });
      }, 3000);
      
      
      const { deadlines, redirect } = this.state;
    
     if (redirect === 'hasDeadlines') {
        return <Redirect to={{
          pathname: `/archive`,
          state: { 
            id: user_id,
            token: token,
            deadlines: deadlines
         }
        }} />;
     } else if (redirect === 'noDeadlines'){
        return <Redirect to={{
          pathname: `/add`,
          state: { 
            id: user_id,
            token: token
          }
        }} />;
     } else {
        return(
          <>
            <div className="container bcg">

            <div className="circle">
            <img src={tick} className="tick" alt="success" />
              </div>

              <p>Your deadline has been saved.</p>

          
                  </div>
          </>
        );
      }
      
    }
  }
  export default Success;