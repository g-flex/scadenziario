import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

class Intro extends React.Component {

    render(){
        return (
            <div id="wrapper" className="fade-in">
                <div id="intro">
                    <h1>
                        This is<br />
                        Don't Forget It
                    </h1>
                    <p>By Mohole students</p>
                </div>
            </div>
        );
    }
    
}

function Nav(){
    return(
        <nav id="nav">
            <ul className="links">
                <li className="active"><a href="archive">Archive</a></li>
                <li><a href="calendar">Calendar</a></li>
                <li><a href="settings">Settings</a></li>
            </ul>
        </nav>
    );
}


// function App() {
//     return (
//         <>
//             <Intro />
//             <Nav />
//         </>
//     );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


