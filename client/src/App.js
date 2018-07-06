import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { fetchCategory,fetchGraph } from './actions';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategory());
    this.props.dispatch(fetchGraph());
  }

  render() {
    return (
      <Router>  
        <div>      
          <Route exact path="/signUp"  component={SignUpForm} />            
          <Route exact path="/login"  component={LoginForm} />            
          <Route exact path="/dashboard"  component={Dashboard} />        
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state
  }
}

export default connect(mapStateToProps)(App);
