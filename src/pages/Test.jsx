import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Test extends React.Component {
	
  render() {
	const { username } = this.props.match.params;
    return(
      <>
        <div className="container">
          <div className="row">
            <h2>welcome: {username}</h2>
          </div>
        </div>
      </>
    );
  }
}
export default Test;