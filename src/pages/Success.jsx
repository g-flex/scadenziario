import React from "react";
import tick from "../img/tick.png";


class Success extends React.Component {
    render() {
      return(
        <>
          <div className="container bcg">

          <div className="circle">
          <img src={tick} className="tick" alt="success" />
             </div>

            <p>Your deadline has been saved.</p>

         
                </div>
        </>
      );
    }
  }
  export default Success;