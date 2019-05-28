import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";
class Settings extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div class="row">
           <div class="col">
           <img src={logo} />
           </div>
        </div>
        <div class="row settings">
           <div class="col-12"><Link to="/"><h3>Profile</h3></Link></div>
           <div class="col-12"><Link to="/"><h3>Help</h3></Link></div>
           <div class="col-12"><Link to="/"><h3>About</h3></Link></div>
           <div class="col-12"><Link to="/"><h3>Log Out</h3></Link></div>
        </div>
          </div>
        </>
      );
    }
  }
  export default Settings;