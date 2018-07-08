import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Logo from './Logo';
import LoginForm from './LoginForm';

export class LandingPage extends React.Component {
  render(){
        // If we are logged in redirect straight to the user's dashboard
        if (this.props.loggedIn) {
          return <Redirect to="/dashboard" />;
      }

      return (
          <div className="home">
              <Logo />
              <LoginForm />
              <Link to="/signup">Register</Link>
          </div>
      );
  }
}

const mapStateToProps = state => {    
    return {  loggedIn: state.auth.currentUser}
};

export default connect(mapStateToProps)(LandingPage);
