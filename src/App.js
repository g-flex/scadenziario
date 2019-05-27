import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Intro />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/settings" component={Settings} />
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function Archive() {
  return <h2>Archive</h2>;
}

function Calendar() {
  return <h2>Calendar</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

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

function Header() {
  return (
    <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}

function Footer() {
  return <h4><small>Copyright Mohole 2019©</small></h4>;
}

export default App;