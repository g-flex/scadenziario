import React from "react";
import Login from "./pages/Login";
// import Test from "./pages/Test";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Subcategory from "./pages/Subcategory";
import Archive from "./pages/Archive";
import Deadline from "./pages/Deadline";
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Subcategory_person from "./pages/Subcategory_person";
import Subcategory_other from "./pages/Subcategory_other";
import Subcategory_home from "./pages/Subcategory_home";
import Splashpage from "./pages/Splashpage";
import Add_deadline from "./pages/Add_deadline";
import Edit from "./pages/Edit";
import Edit_person from "./pages/Edit_person";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        {/* <Route exact path="/" component={() => <Test userId='instaB' />} /> */}
        <Route exact path="/archive" component={Archive} />
        {/* <Route exact path="/welcome/:username" component={Test} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/add" component={Add_deadline} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/deadline" component={Deadline} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/subcategory" component={Subcategory} />
        <Route exact path="/subcategory_person" component={Subcategory_person} />
        <Route exact path="/subcategory_other" component={Subcategory_other} />
        <Route exact path="/subcategory_home" component={Subcategory_home} />
        <Route exact path="/splashpage" component={Splashpage} />
        <Route exact path="/add_deadline" component={Add_deadline} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/edit_person" component={Edit_person} />
    </Router>
  );
}

export default App;