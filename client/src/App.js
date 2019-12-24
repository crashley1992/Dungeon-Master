import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './component/NavTabs/NavTabs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <NavTabs />
    <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
