import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Test extends React.Component {
	// constructor(props){
	// super(props);
	// 	// this.state = {
	// 	// 	userId: 10
	// 	// }
	// }
  render() {
    return(
      <>
        <div className="container">
          <div className="row">
            <h2>userId: {this.props.userId}</h2>
          </div>
        </div>
      </>
    );
  }
}
export default Test;