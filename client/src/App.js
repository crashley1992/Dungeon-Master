import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavTabs from './component/NavTabs/NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import CreateCharacter from './pages/CreateCharacter';

class App extends Component {
  state = {
    loggedIn: false,
    newAccount: false,
  }

  handleUpdateLogin = () => {
    this.setState({loggedIn: true})
}

  handleSignup = () => {
    this.setState({newAccount: true})
  }

  render() {    
    return (
      <Router>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route path="/login" 
        render={(props) => ( this.state.loggedIn ? (
        <UserProfile loggedIn={true} component={UserProfile}/>
      ) : (
        <Login {...props} handleUpdateLogin={this.handleUpdateLogin}/>
      )
      )}/>
          <Route path="/signup" 
        render={(props) => ( this.state.newAccount ? (
        <UserProfile newAccount={true} component={UserProfile}/>
      ) : (
        <Signup {...props} handleSignup={this.handleSignup}/>
      )
      )}/>

      <Route path="/logout" component={Home}/>
        
        </Router>
      )
  }
}

export default App;
