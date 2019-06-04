import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Category extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
            <Link to="/"><img src={back} /> </Link>
        </div>
        
        <h1>NEW DEADLINE</h1>

        <button className="btn btn-category">
            <h3>CHOSE <br/> YOUR <br/> CATEGORY</h3>
        </button>
        <div className="subcategory">
        <Link to="/"><p>HOME</p></Link>
        <hr/>
        <Link to="/"><p>ANIMALS</p></Link>
        <hr/>
        <Link to="/"><p>PEOPLE</p></Link>
        <hr/>
        <Link to="/"><p>LOANS</p></Link>
        <hr/>
        <Link to="/"><p>SUBSCRIPTIONS</p></Link>
    </div>
          </div>
        </>
      );
    }
  }
  export default Category;