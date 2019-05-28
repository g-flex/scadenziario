import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";
class Subcategory extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div class="row">
           <div class="col">
             <img src={logo} />
           </div>
        </div>
        <div class="row subcategory">
           <div class="col-1"><h1>CALENDAR</h1></div>
           <div class="col-11">
            <h3>Subcategory</h3>
            <h3>Subcategory</h3>
            <h3>Subcategory</h3>
            <h3>Subcategory</h3>
            <h3>Subcategory</h3>
            </div>
        </div>
          </div>
        </>
      );
    }
  }
  export default Subcategory;