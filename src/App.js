import React from "react";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Subcategory from "./pages/Subcategory";
import Archive from "./pages/Archive";
import Deadline from "./pages/Deadline";
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
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
        <Route exact path="/category" component={Category} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/deadline" component={Deadline} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/subcategory" component={Subcategory} />
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