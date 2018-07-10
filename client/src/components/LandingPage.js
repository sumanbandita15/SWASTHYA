import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './LoginForm';
import './LandingPage.css';

export class LandingPage extends React.Component {
  render(){
      console.log("This is the landing page " + JSON.stringify(this.props.loggedIn));
        // If we are logged in redirect straight to the user's dashboard
        if (this.props.currentUser !== null) {
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
    return {  currentUser: state.auth.currentUser}
};

export default connect(mapStateToProps)(LandingPage);
