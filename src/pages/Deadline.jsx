import React from "react";
import back from "../img/back.png";

class Deadline extends React.Component {
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }
    render() {
      if (this.props.selectedCategory==='HOME'){
        return(
          <>
            <div className="container">

            <div className="control">
            <img src={back} onClick={()=>this.changeView('chooseCategory')} alt="back" />
          </div>
          
          <h1>NEW DEADLINE</h1>

          <div className="index">
          <h6>Category</h6>
          <hr/>
          {/* <h3>HOME</h3> */}
          <h3>{this.props.selectedCategory}</h3>
      </div>
          <button className="btn btn-category">
              <h3>CHOSE <br/> YOUR <br/> SUBCATEGORY</h3>
          </button>
          <div className="subcategory">
            <p onClick={()=>this.changeView('subcategory_home', 'HOME', 'BOILER')}>BOILER</p>
            <hr/>
            <p onClick={()=>this.changeView('subcategory_home', 'HOME', 'BILLS')}>BILLS</p>
          </div>

            </div>
          </>
        );
      } else if (this.props.selectedCategory==='PEOPLE'){
        return(
          <>
            <div className="container">

            <div className="control">
            <img src={back} onClick={()=>this.changeView('chooseCategory')} alt="back" />
          </div>
          
          <h1>NEW DEADLINE</h1>

          <div className="index">
          <h6>Category</h6>
          <hr/>
          {/* <h3>HOME</h3> */}
          <h3>{this.props.selectedCategory}</h3>
      </div>
          <button className="btn btn-category">
              <h3>CHOSE <br/> YOUR <br/> SUBCATEGORY</h3>
          </button>
          <div className="subcategory">
            <p onClick={()=>this.changeView('subcategory_person', 'PEOPLE', 'ID CARD')}>ID CARD</p>
            <hr/>
            <p onClick={()=>this.changeView('subcategory_person', 'PEOPLE', 'PASSPORT')}>PASSPORT</p>
          </div>

            </div>
          </>
        );
      } else if(this.props.selectedCategory==='ANIMALS'){
        return(
          <>
            <div className="container">

            <div className="control">
            <img src={back} onClick={()=>this.changeView('chooseCategory','Add')} alt="back" />
          </div>
          
          <h1>NEW DEADLINE</h1>

          <div className="index">
          <h6>Category</h6>
          <hr/>
          {/* <h3>HOME</h3> */}
          <h3>{this.props.selectedCategory}</h3>
      </div>
          <button className="btn btn-category">
              <h3>CHOSE <br/> YOUR <br/> SUBCATEGORY</h3>
          </button>
          <div className="subcategory">
            <p onClick={()=>this.changeView('subcategory_animal', 'ANIMALS', 'DOG')}>DOG</p>
            <hr/>
            <p onClick={()=>this.changeView('subcategory_animal', 'ANIMALS', 'CAT')}>CAT</p>
          </div>

            </div>
          </>
        );
      } else if(this.props.selectedCategory==='OTHER'){
        return ('OTHER category');
      } else {
        return ('Error, please contact support');
      }
    }
  }
  export default Deadline;