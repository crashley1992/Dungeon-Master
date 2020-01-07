import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './component/NavTabs/NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

class App extends Component {
  render() {
    return (
      <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      </Router>
    )
  }
}

export default App;
