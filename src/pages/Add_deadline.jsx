import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import plus from "../img/plus.png";


class Add_deadline extends React.Component {
    render() {
      return(
        <>
          <div className="container bcg">

          <div className="row agg-scad">
           <div className="col-1"><h1>CALENDAR</h1></div>
           <div className="col-11">
           <div class="circle">
           <img src={plus} className="tick"/>
            </div>

            <p>Aggiungi la tua prima scadenza</p>

            </div>
        </div>

            
         
                </div>
        </>
      );
    }
  }
  export default Add_deadline;