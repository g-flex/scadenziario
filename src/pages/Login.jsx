import React from "react";
import logo from "../img/brain_logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Login extends React.Component {
  render() {
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
              <form>
                <div className="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
                <div><small>or</small></div>
                <div><button className="btn btn-primary"><Link to="/register">Create account</Link></button></div>
              </form>
            </div>
          </div>
      </>
    );
  }
}
export default Login;