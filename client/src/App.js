import React, { Component } from 'react';
import Logo from './components/Logo';
import './App.css';
import { connect } from 'react-redux'
import { fetchCategory } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategory())
  }

  render() {
    return (
      <div>
        <Logo />
      </div>
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
