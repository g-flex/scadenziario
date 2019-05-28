import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";
import cancel from "../img/cancel.png";

class Deadline extends React.Component {
    render() {
      return(
        <>
          <div className="container">

          <div className="control">
            <Link to="/"><img src={back} /></Link>
            <Link to="/"><img src={cancel} /></Link>
        </div>
        
        <h1>NEW DEADLINE</h1>

        

        <button className="btn btn-category">
            <h3>CHOSE <br/> YOUR <br/> SUBCATEGORY</h3>
        </button>
        <div className="subcategory">
        <Link to="/">HOME</Link>
        <hr/>
        <Link to="/">ANIMALS</Link>
    </div>

    <button className="btn btn-date">
            <h3>LAST <br/> CHECK</h3>
        </button>
        <div className="date">
        <input type="date" className="ml-5" />
        <hr/>

    <Link to="/"><button className="btn"><h3 className="create">CREATE</h3></button></Link>    
        
</div>
          </div>
        </>
      );
    }
  }
  export default Deadline;