import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return <h2>Home</h2>;
}

 

function Routes() {
    return (
      <Router>
      <Switch>
     
     
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
    )
}

export default Routes
