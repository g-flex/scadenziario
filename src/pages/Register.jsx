import React from "react";
import logo from "../img/brain_logo.png";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Register extends React.Component {state = {
  redirect: false
}
constructor() {
  super();
  this.clickSubmit = this.clickSubmit.bind(this);
}

getAuthPost(email, password, username, callback) {
  let data = {
    username: username,
    email: email,
    password: password
  };
  
  const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
  fetch('https://nodedue.mohole.it/auth/local/register', {
    method: 'POST',
    body: formBody,
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((response) => {
    callback(response);
  });
  //.catch(error=> console.error('Error:', error));
}

clickSubmit(event){
  event.preventDefault();
  let email = document.querySelector("input[type='email']").value;
  let username = document.querySelector("input[type='text']").value;
  let password = document.querySelector("input.pass1").value;
  let repeatPassword = document.querySelector("input.pass2").value;
  if(!email || !password || !username || !password || !repeatPassword){
    alert('Please fill in Username, Email and Password fields');
  } else {
    //alert('all filled');
    this.getAuthPost(email, password, username, (response)=>{
      localStorage.setItem('authToken', response.jwt);
      localStorage.setItem('username', response.user.username);
      localStorage.setItem('userId', response.user.id);
      this.setState({ 
        redirect: true,
        username: response.user.username,
        authToken: response.jwt,
        userId: response.user.id
       });
      
    });
  }
}
  render() {
    const { redirect, authToken, userId } = this.state;

     if (redirect) {
      // to={`/welcome/${username}`}
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
          <div className="row">
            <div className="col">
              <img src={logo} height='100' alt="logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-12"><h1>Create Account</h1></div>
            <div className="col-12">
              <form onSubmit={this.clickSubmit}>
                <div className="form-group d-flex justify-content-center">
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="password" className="form-control pass1" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="password" className="form-control pass2" id="exampleInputPassword1" placeholder="Repeat Password" />
                </div>
                <div><button type="submit" className="btn btn-primary">Create account</button></div>
                  <div><small>or</small></div>
              </form>
              <div><Link to="/login"><button className="btn btn-primary">Login</button></Link></div>
              </div>
          </div>
        </>
      );
    }
  }
}
export default Register;