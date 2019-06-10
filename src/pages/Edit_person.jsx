import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Edit_person extends React.Component {
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
            <Link to="/"><img src={back} /> </Link>
        </div>
        
        <h1>EDIT</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3 className="mb-5">PERSON/ANIMAL</h3>

        <h6>Subcategory</h6>
        <hr />
        <h3 className="mb-5"><input type="text" placeholder="Id card/Dog"/></h3>
        
        <h6>Birthday</h6>
        <hr/>
        <h3 className="mb-5"><input type="date" className="ml-5" /></h3>

        <h6>Issuing / Last vacination</h6>
        <hr />
        <h3 className="mb-5"><input type="date" className="ml-5"/></h3>
    </div>


        
<Link to="/"><button className="btn btn-1"><h3 className="create">DELETE</h3></button></Link>
        
          </div>
        </>
      );
    }
  }
  export default Edit_person;