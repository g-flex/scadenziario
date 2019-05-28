import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";
class Profile extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div className="row">
           <div className="col">
               <img src={logo} />
           </div>
        </div>
        <div className="row profile">
           <div className="col-12"><h1>Profile</h1></div>
           <div className="col-12">
            <form>
              <div className="form-group">
               <label>Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" />
              </div>
              <div className="form-group">
               <label>Surname</label>
                <input type="text" className="form-control" id="surname" placeholder="Surname" />
              </div>
              <div className="form-group">
               <label>E-mail</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail" />
              </div>
              <div className="form-group">
               <label>Change your password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div><Button type="submit" className="btn btn-primary">Done</Button></div>
             </form>
            </div>
        </div>
          </div>
        </>
      );
    }
  }
  export default Profile;