import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";

class Subcategory extends React.Component {
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }
    render() {
      //console.log('this.props: ', this.props);
      var filteredDeadlines = this.props.deadlines.filter(dl=>dl.Category === this.props.category);
      //console.log('filteredDeadlines: ', filteredDeadlines);
      if (filteredDeadlines.length !== 0){
        return(
          <>
            <div className="container">
            <div className="row mb-5">
             <div className="col">
               <img src={logo} height="100" alt="" />
             </div>
          </div>
          <div className="row list">
             <div className="col-1"><h1>CALENDAR</h1></div>
             <div className="col-11">
             {/* {filteredDeadlines.forEach((dl)=>{return <h3>{dl.Subcategory}</h3>})} */}
             {filteredDeadlines.map((value, index) => {
                return <h3 key={index} onClick={()=>this.changeView('browseSubcategory', value.Category, value.Subcategory)}>{value.Subcategory}</h3>
              })}
              </div>
          </div>
            </div>
          </>
        );
      } else {
        return(
          <>
            <div className="container">
            <div className="row mb-5">
             <div className="col">
               <img src={logo} height="100" alt="" />
             </div>
          </div>
          <div className="row list">
             <div className="col-1"><h1>CALENDAR</h1></div>
             <div className="col-11">
               <h3>No deadlines for the selected category.</h3>
              </div>
          </div>
            </div>
          </>
        );
      }
    }
  }
  export default Subcategory;