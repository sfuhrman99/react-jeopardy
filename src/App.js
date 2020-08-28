import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome.js';
import Clock from './components/clock/Clock'
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation'

import { Route,Switch} from "react-router-dom";
import NotFound from './components/notFound/NotFound'
import Jeopardy from './components/jeopardy/Jeopardy'


class App extends Component {
  render() {
    return (
      <div>
      
        <Navigation />
        <Switch>
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Doggy Dog" />}
        />
        <Route
          exact 
          path="/clock"
          component = {Clock}
        />
        <Route 
        exact 
        path = '/contact'
        component = {Contact}/>

        <Route 
        exact 
        path = '/jeopardy'
        component = {Jeopardy}/>
      
       <Route>
          <NotFound />
        </Route>
      </Switch>
      </div>
    );
  }
}

export default App;
