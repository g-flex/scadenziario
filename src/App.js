import React from "react";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/test" component={() => <Test userId='instaB' />} />
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

export default App;