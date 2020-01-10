import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from './component/NavTabs/NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';

class App extends Component {
  state = {
    loggedIn: false,
  }

  logUserIn() {
    this.setState({loggedIn: true})
  }

  render() {    
    return (
      <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}  render={() => (
        this.state.loggedIn ? (
          <UserProfile />
        ) : (
          <Login onSuccess={this.logUserIn} />
        )
      )} />
          <Route path="/signup" component={Signup}  render={() => (
        this.state.loggedIn ? (
          <UserProfile />
        ) : (
          <Signup />
        )
      )} />
        <Route exact path="/userprofile" component={UserProfile} />
        </Router>
      )
  }
}

export default App;
