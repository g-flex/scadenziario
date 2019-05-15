import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/archive" component={Archive} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/settings" component={Settings} />
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
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}

function Footer() {
  return <h4><small>Copyright Mohole 2019©</small></h4>;
}

export default App;