import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import {refreshAuthToken,storeAuthInfo} from './actions/auth';
import  LandingPage  from './components/LandingPage';
import {  loadAuthToken }from './local-storage';

class App extends Component {
  componentDidMount(){
    const authToken = loadAuthToken();
    if(!this.props.loggedIn){
      authToken && storeAuthInfo(authToken,this.props.dispatch);
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}

  render() {
    return (
      <Router>  
        <div>   
        <Route exact path="/"  component={LandingPage} />       
          <Route exact path="/signUp"  component={SignUpForm} />            
          <Route exact path="/login"  component={LoginForm} />            
          <Route exact path="/dashboard"  component={Dashboard} />        
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {  loggedIn: state.auth.currentUser}
}

export default connect(mapStateToProps)(App);
