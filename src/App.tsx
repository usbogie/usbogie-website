import React from 'react';
import { Switch, Route } from "react-router-dom";

import MainNav from './nav/MainNav';
import Home from "./home/Home";
import Demo from "./components/Demo";
import Contact from "./contact/Contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
