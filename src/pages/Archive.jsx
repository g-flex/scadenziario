import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../img/brain_logo.png";
import Subcategory from "../pages/Subcategory";

class Archive extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...props.location.state
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(newPhase, selectedCategory='', subcategory=''){
    this.setState({ 
      addPhase: newPhase,
      selectedCategory: selectedCategory,
      subcategory: subcategory
    })
  }

    render() {
      
        //console.log('this.state.deadlines: ', this.state.deadlines);
      if(!this.state.addPhase || this.state.addPhase===''){
        return(
          <>
            <div className="container archive">
            <div className="row mb-5">
            <div className="col">
            <img src={logo} height="100" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-1"><h1>CALENDAR</h1></div>
            <div className="col-11">
                <div className="row">
                    <div className="col-6"><h3 id="home" onClick={()=>this.changeView('browseCategory', 'Home', '')}>HOME</h3></div>
                    <div className="col-6"><h3 id="animals" onClick={()=>this.changeView('browseCategory', 'Animals', '')}>ANIMALS</h3></div>
                </div>
                <div className="row">
                    <div className="col-6"><h3 id="people" onClick={()=>this.changeView('browseCategory', 'People', '')}>PEOPLE</h3></div>
                    <div className="col-6"><h3 id="other" onClick={()=>this.changeView('browseCategory', 'Other', '')}>OTHER</h3></div>
                </div>
                {/* <div className="row">
                    <div className="col-6"><h3 id="financial">FINANCIAL</h3></div>
                </div> */}
              </div>
          </div>
            </div>
          </>
        );
      } else if (this.state.addPhase!=='' && this.state.addPhase){
        if(this.state.addPhase==='browseCategory'){
          return(
            <Subcategory subcategory={this.state.subcategory} category={this.state.selectedCategory} deadlines={this.state.deadlines} changeView={this.changeView} />
          );
        } else if(this.state.addPhase==='browseSubcategory'){
          return('subcategory: ' + this.state.subcategory);
        }
      }
    }
  }
  export default Archive;