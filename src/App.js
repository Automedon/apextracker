import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Search from "./components/Search";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route
            path="/profile/:platform/:gamertag"
            exact
            component={Profile}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
