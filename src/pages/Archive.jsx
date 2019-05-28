import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";

class Archive extends React.Component {
    render() {
      return(
        <>
          <div className="container archive">
          <div className="row">
           <div className="col">
           <img src={logo} height="100" alt="" />
           </div>
        </div>
        <div className="row">
           <div className="col-1"><h1>CALENDAR</h1></div>
           <div className="col-11">
               <div className="row">
                   <div className="col-6"><h3 id="home">HOME</h3></div>
                   <div className="col-6"><h3 id="animals">ANIMALS</h3></div>
               </div>
               <div className="row">
                   <div className="col-6"><h3 id="people">PEOPLE</h3></div>
                   <div className="col-6"><h3 id="other">OTHER</h3></div>
               </div>
               <div className="row">
                   <div className="col-6"><h3 id="financial">FINANCIAL</h3></div>
               </div>
            </div>
        </div>
          </div>
        </>
      );
    }
  }
  export default Archive;