import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

// function Nav(){
//     return(
//         <nav id="nav">
//             <ul className="links">
//                 <li className="active"><a href="archive">Archive</a></li>
//                 <li><a href="calendar">Calendar</a></li>
//                 <li><a href="settings">Settings</a></li>
//             </ul>
//         </nav>
//     );
// }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);