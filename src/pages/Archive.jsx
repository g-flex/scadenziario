import React from "react";
import Login from "../pages/Login";
import logo from "../img/brain_logo.png";
import Subcategory from "../pages/Subcategory";
import plus from "../img/plus.png";
import Edit from "../pages/Edit";
import Edit_person from "../pages/Edit_person";
import Success from "../pages/Success";
import { Redirect } from 'react-router-dom';

class Archive extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ...props.location.state
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(newPhase, selectedCategory='', subcategory='', values='', deadlines=''){
    this.setState({ 
      addPhase: newPhase,
      selectedCategory: selectedCategory,
      subcategory: subcategory,
      values: values,
      valueList: deadlines
    })
  }

    render() {
        //console.log('this.state.deadlines: ', this.state.deadlines);
      if(!localStorage.getItem('authToken') || !localStorage.getItem('username') || !localStorage.getItem('userId')){
        return <Redirect to={Login} />
      } else if(!this.state.addPhase || this.state.addPhase===''){
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
                <div className="row">
                  <div className="col-6">
                  <div className="circle">
                    <img onClick={()=>this.changeView('add')} src={plus} className="tick" alt="plus"/>
                  </div>
                  </div>
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
          return(
            <Edit values={this.state.values} subcategory={this.state.subcategory} category={this.state.selectedCategory} valueList={this.state.valueList} changeView={this.changeView} />
          );
        } else if(this.state.addPhase==='browseSubcategory_person'){
          return(
            <Edit_person values={this.state.values} subcategory={this.state.subcategory} category={this.state.selectedCategory} valueList={this.state.valueList} changeView={this.changeView} />
          );
        } else if(this.state.addPhase==='add'){
          return <Redirect to={{
            pathname: `/add`,
            state: { 
              id: localStorage.getItem('userId'),
              token: localStorage.getItem('authToken')
           }
          }} />;
        } else if(this.state.addPhase==='success'){
          return <Success />;
        }
      }
    }
  }
  export default Archive;