import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import tick from "../img/tick.png";


class Success extends React.Component {
    render() {
      return(
        <>
          <div className="container bcg">

          <div className="circle">
          <img src={tick} className="tick"/>
             </div>

            <p>La tua scadenza è stata salvata</p>

         
                </div>
        </>
      );
    }
  }
  export default Success;