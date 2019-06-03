import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Deadline extends React.Component {
    render() {
      return(
        <>
          <div className="container">

          <div className="control">
            <Link to="/"><img src={back} /></Link>
        </div>
        
        <h1>NEW DEADLINE</h1>

        <div class="index">
        <h6>Category</h6>
        <hr/>
        <h3>HOME</h3>
    </div>

        

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