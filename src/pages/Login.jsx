import React from "react";
import logo from "../img/brain_logo.png";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirect: false
  }
  constructor() {
		super();
    this.clickSubmit = this.clickSubmit.bind(this);
  }
  
  getAuthPost(email, password, callback) {
    let data = {
      identifier: email,
      password: password
    };
    
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    fetch('http://node.mohole.it:1339/auth/local', {
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
    let password = document.querySelector("input[type='password']").value;
    if(!email || !password){
      alert('Please fill in Username and Password fields');
    } else {
      //alert('all filled');
      this.getAuthPost(email, password, (response)=>{
        //console.log('resp: ', response);
        //let authToken = response.jwt;
        //let username = response.user.username;
        this.setState({ 
          redirect: true,
          username: response.user.username,
          //authToken: response.jwt
         });
        
      });
    }

}

  render() {
    const { redirect, username } = this.state;

     if (redirect) {
       return <Redirect to={`/welcome/${username}`} />;
     } else {
      return(
        <>
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
                <div><button className="btn btn-primary"><Link to="/register">Create account</Link></button></div>
              </div>
            </div>
        </>
      );
     }
  }
}
export default Login;