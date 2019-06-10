import React from "react";
import plus from "../img/plus.png";
import Category from "../pages/Category";
import Deadline from "../pages/Deadline";
import Subcategory_home from "../pages/Subcategory_home";
import Subcategory_person from "../pages/Subcategory_person";
import Subcategory_other from "../pages/Subcategory_other";
import Success from "../pages/Success";
import Login from "../pages/Login";
import { Redirect } from 'react-router-dom';



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
      if(!localStorage.getItem('authToken') || !localStorage.getItem('username') || !localStorage.getItem('userId')){
        return <Redirect to={Login} />
      } else if(!this.state.addPhase || this.state.addPhase===''){
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
      } else if(this.state.addPhase === 'chooseCategory'){
        return <Category changeView={this.changeView} />;
      } else if(this.state.addPhase === 'Deadline'){
        return <Deadline changeView={this.changeView} selectedCategory={this.state.selectedCategory} />;
      } else if(this.state.addPhase === 'subcategory_home'){
        return <Subcategory_home changeView={this.changeView} subcategory={this.state.subcategory} />;
      } else if(this.state.addPhase === 'subcategory_person'){
        return <Subcategory_person changeView={this.changeView} subcategory={this.state.subcategory} category={this.state.selectedCategory} />;
      } else if(this.state.addPhase === 'subcategory_animal'){
        return <Subcategory_person changeView={this.changeView} subcategory={this.state.subcategory} category={this.state.selectedCategory} />;
      } else if(this.state.addPhase === 'subcategory_other'){
        return <Subcategory_other changeView={this.changeView} subcategory={this.state.subcategory} category={this.state.selectedCategory} />;
      } else if(this.state.addPhase === 'success'){
        return <Success />;
      }
    }
  }
  export default Add_deadline;