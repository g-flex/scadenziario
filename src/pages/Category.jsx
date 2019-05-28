import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";
import cancel from "../img/cancel.png";

class Category extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
            <Link to="/"><img src={back} /> </Link>
            <Link to="/"><img src={cancel} /> </Link>
        </div>
        
        <h1>NEW DEADLINE</h1>

        <Button className="btn btn-category">
            <h3>CHOSE <br/> YOUR <br/> CATEGORY</h3>
        </Button>
        <div className="category">
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