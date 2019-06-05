import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import back from "../img/back.png";

class Subcategory_home extends React.Component {
  constructor(props) {
    super(props);
  }
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
            <img src={back} onClick={()=>this.changeView('Deadline','HOME')} alt="back" />
        </div>
        
        <h1>NEW DEADLINE</h1>

        <div className="index">
        <h6>Category</h6>
        <hr/>
        <h3>HOME</h3>

        <h6>Subcategory</h6>
        <hr/>
        <h3>{this.props.subcategory}</h3>
    </div>


        <section>
        <button className="btn btn-date">
        <h3>LAST <br/> DEADLINE / CHECK</h3>
        </button>
        <div className="date">
                <input type="date" className="ml-5" />
                <hr />     
        </div>
        </section>

<section>
    <button className="btn btn-category">
            <h3>CHOOSE <br/> THE <br/> TIME</h3>
        </button>
        <div className="subcategory mb-5">
                <Link to="/">3 MONTHS</Link>
                <hr/>
                <Link to="/">6 MONTHS</Link>
                <hr/>
                <Link to="/">1 YEAR</Link>
            </div>
            </section>
        
<Link to="/"><button className="btn"><h3 className="create">CREATE</h3></button></Link>
        
          </div>
        </>
      );
    }
  }
  export default Subcategory_home;