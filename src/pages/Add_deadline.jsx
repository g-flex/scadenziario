import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import plus from "../img/plus.png";
import Category from "../pages/Category";
import Deadline from "../pages/Deadline";
import Subcategory_home from "../pages/Subcategory_home";



class Add_deadline extends React.Component {
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
      if(!this.state.addPhase || this.state.addPhase==''){
        return(
          <>
            <div className="container bcg">

              <div className="row agg-scad">
                <div className="col-1"><h1>CALENDAR</h1></div>
                <div className="col-11">
                  <div className="circle">
                    <img onClick={()=>this.changeView('chooseCategory')} src={plus} className="tick" alt="plus"/>
                  </div>
                  <p>Aggiungi la tua prima scadenza</p>
                </div>
              </div>
            </div>
          </>
        );
      } else if(this.state.addPhase == 'chooseCategory'){
        return <Category changeView={this.changeView} />;
      } else if(this.state.addPhase == 'Deadline'){
        return <Deadline changeView={this.changeView} selectedCategory={this.state.selectedCategory} />;
      } else if(this.state.addPhase == 'subcategory_home'){
        return <Subcategory_home changeView={this.changeView} subcategory={this.state.subcategory} />;
      }
    }
  }
  export default Add_deadline;