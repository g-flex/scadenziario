import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import brain_logo from "../img/brain_logo.png";


class Splashpage extends React.Component {
  undisplayAfterSplash(){
    setTimeout(function(){
      document.querySelector('.undisplayAfter').classList.add('d-none');
    }, 3000);
  }
    render() {
      this.undisplayAfterSplash();
      return(
        <>
          <div className="container logo undisplayAfter">
            <img src={brain_logo} className="brain_logo animated fadeOut delay-2s" alt="splashpage" width="80%" />
          </div>
        </>
      );
    }
  }
  export default Splashpage;