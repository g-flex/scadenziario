import React from "react";
import back from "../img/back.png";
import logo from "../img/brain_logo.png";

class Subcategory extends React.Component {
  changeView = (a,b='',c='',d='',e='') => {
    this.props.changeView(a,b,c,d,e);
  }
    render() {
      //console.log('this.props: ', this.props);
      var filteredDeadlines = this.props.deadlines.filter(dl=>dl.Category === this.props.category);
      //console.log('filteredDeadlines: ', filteredDeadlines);
      if (filteredDeadlines.length !== 0){
        return(
          <>
            <div className="container">
            <div className="control">
              <img src={back} onClick={()=>this.changeView('')} alt="back" />
          </div>
            <div className="row mb-5">
             <div className="col">
               <img src={logo} height="100" alt="logo" />
             </div>
          </div>
          <div className="row list">
             <div className="col-1"><h1>CALENDAR</h1></div>
             <div className="col-11">
             {/* {filteredDeadlines.forEach((dl)=>{return <h3>{dl.Subcategory}</h3>})} */}
             {filteredDeadlines.map((value, index) => {
                return <h3 key={index} onClick={()=>this.changeView(value.Category==='People'||value.Category==='Animals'?'browseSubcategory_person':'browseSubcategory', value.Category, value.Subcategory, value, this.props.deadlines)}>{value.Subcategory}</h3>
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
               <img src={logo} height="100" alt="logo" />
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