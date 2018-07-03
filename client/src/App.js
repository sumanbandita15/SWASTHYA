import React, { Component } from 'react';
import Logo from './components/Logo';
import Category from './components/Category';
import './App.css';
import { connect } from 'react-redux'
import { fetchCategory,fetchGraph } from './actions'
import Graph from './components/Graph';
import ShowGraph from './components/ShowGraph'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategory());
    this.props.dispatch(fetchGraph());
  }

  render() {
    return (
      <div className="dashboard">        
          <Logo />          
          <label> CATEGORY: </label>
          <Category />              
          <input type='button' value="ADD A NEW CATEGORY" />
          <input type='button' value="ENTER TODAY'S FITNESS ROUTINE" />
          <ShowGraph/>   
          <Graph />
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
