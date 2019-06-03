import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Subcategory_person extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
            <Link to="/"><img src={back} /> </Link>
        </div>
        
        <h1>NEW DEADLINE</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3>PERSON/ANIMAL</h3>

        <h6>Birthday</h6>
        <hr />
        <h3>DD/MM/YY</h3>
    </div>


        
        <button className="btn btn-date">
        <h3>CHOOSE <br/> THE <br/> SUBCATEGORY</h3>
        </button>
        <div className="subcategory">
                <Link to="/">Id card/Dog</Link>
                <hr/>
                <Link to="/">Passport/Cat</Link>
                
            </div>
        

    <button className="btn btn-category">
    <h3>ISSUING / <br/> LAST VACINATION</h3>
        </button>
        <div class="date">
                <input type="date" class="ml-5" />
                <hr/>     
        </div>
        
<Link to="/"><button className="btn"><h3 className="create">CREATE</h3></button></Link>
        
          </div>
        </>
      );
    }
  }
  export default Subcategory_person;