import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';
import './LandingPage.css';

export class LandingPage extends React.Component {
  render(){
        // If we are logged in redirect straight to the user's dashboard
        if (this.props.loggedIn) {
          return <Redirect to="/dashboard" />;
      }

      return (
          <div>
              <LoginForm />              
          </div>
      );
  }
}

const mapStateToProps = state => {    
    return {  loggedIn: state.auth.currentUser}
};

export default connect(mapStateToProps)(LandingPage);
