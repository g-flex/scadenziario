import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import brain_logo from "../img/brain_logo.png";


class Splashpage extends React.Component {
    render() {
      return(
        <>
          <div className="container logo">
          <img src={brain_logo} className="brain_logo animated fadeOut delay-2s" alt="" width="80%" />
       
                </div>
        </>
      );
    }
  }
  export default Splashpage;