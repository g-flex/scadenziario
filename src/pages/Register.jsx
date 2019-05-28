import React from "react";
import logo from "../img/brain_logo.png";
class Register extends React.Component {
  render() {
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
            <form>
              <div className="form-group d-flex justify-content-center">
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Surname" />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Repeat Password" />
              </div>
              <div><button type="submit" className="btn btn-primary">Create account</button></div>
             </form>
            </div>
        </div>
      </>
    );
  }
}
export default Register;