import React from "react";
import back from "../img/back.png";

class Category extends React.Component {
  changeView = (a,b='',c='') => {
    this.props.changeView(a,b,c);
  }
    render() {
      return(
        <>
          <div className="container">
          <div className="control">
          <img src={back} onClick={()=>this.changeView('')} alt="back" />
        </div>
        
        <h1>NEW DEADLINE</h1>

        <button className="btn btn-category">
            <h3>CHOSE <br/> YOUR <br/> CATEGORY</h3>
        </button>
        <div className="subcategory">
        <p onClick={()=>this.changeView('Deadline', 'HOME')}>HOME</p>
        <hr/>
        <p onClick={()=>this.changeView('Deadline', 'ANIMALS')}>ANIMALS</p>
        <hr/>
        <p onClick={()=>this.changeView('Deadline', 'PEOPLE')}>PEOPLE</p>
        <hr/>
        <p onClick={()=>this.changeView('subcategory_other', 'OTHER', 'OTHER')}>OTHER</p>
        
    </div>
          </div>
        </>
      );
    }
  }
  export default Category;