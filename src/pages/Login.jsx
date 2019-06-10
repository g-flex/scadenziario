import React from "react";
import logo from "../img/brain_logo.png";
import Splashpage from "../pages/Splashpage";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirect: false
  }
  constructor() {
		super();
    this.clickSubmit = this.clickSubmit.bind(this);
    this.checkDeadlines = this.checkDeadlines.bind(this);
  }
  
  getAuthPost(email, password, callback) {
    let data = {
      identifier: email,
      password: password
    };
    
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    fetch('https://nodedue.mohole.it/auth/local', {
      method: 'POST',
      body: formBody,
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then((response) => {
      callback(response);
    })
    .catch(()=> alert('Error: please retry.'));
  }

clickSubmit(event){
    event.preventDefault();
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;
    if(!email || !password){
      alert('Please fill in Username and Password fields');
    } else {
      //alert('all filled');
      this.getAuthPost(email, password, (response)=>{
        //console.log('resp: ', response);
        //let authToken = response.jwt;
        //let username = response.user.username;
        localStorage.setItem('authToken', response.jwt);
        localStorage.setItem('username', response.user.username);
        localStorage.setItem('userId', response.user.id);
        
         this.checkDeadlines(response.user.id, response.jwt, (resp)=>{
            //console.log('resp: ', resp);
            this.setState({
              redirect: resp[0]?'hasDeadlines':'noDeadlines',
              username: response.user.username,
              authToken: response.jwt,
              userId: response.user.id,
              deadlines: resp
             });
        });
      });
    }
}

checkDeadlines(user_id, token, callback) {
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
  .catch(()=> alert('Error: please retry.'));
}

  render() {
    const { redirect, authToken, userId, deadlines } = this.state;
    
     if (redirect === 'hasDeadlines') {
      // to={`/welcome/${username}`}
        return <Redirect to={{
          pathname: `/archive`,
          state: { 
            id: `${userId}`,
            token: `${authToken}`,
            deadlines: deadlines
         }
        }} />;
     } else if (redirect === 'noDeadlines'){
      return <Redirect to={{
        pathname: `/add`,
        state: { 
          id: `${userId}`,
          token: `${authToken}`
       }
      }} />;
     } else {
      return(
        <>  
            <Splashpage />
            <div className="row">
              <div className="col">
              <img src={logo} height='100' alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-12"><h1>Log in</h1></div>
              <div className="col-12">
                <form onSubmit={this.clickSubmit}>
                  <div className="form-group d-flex justify-content-center">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Log in</button>
                  <div><small>or</small></div>
                  
                </form>
                <div><Link to="/register"><button className="btn btn-primary">Create account</button></Link></div>
              </div>
            </div>
        </>
      );
     }
  }
}
export default Login;