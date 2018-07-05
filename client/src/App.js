import React, { Component } from 'react';
import Logo from './components/Logo';
import Category from './components/Category';
import './App.css';
import { connect } from 'react-redux'
import { fetchCategory,fetchGraph } from './actions'
import Graph from './components/Graph';
import ShowGraph from './components/ShowGraph';
import Dashboard from './components/Dashboard';
import Records from './components/Records';
import AddFitnessRoutine from './components/AddFitnessRoutine';
import AddOrUpdateCategory from './components/AddOrUpdateCategory';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCategory('333333333333333333333301'));
    this.props.dispatch(fetchGraph('333333333333333333333301'));
  }

  render() {
    return (
      <div className="dashboard">        
          <Logo />                    
          <Category />           
          <Dashboard />
          <Records />           
          <ShowGraph/>
          <div className="container"> 
            <div className="FitnessRoutine">
              <AddFitnessRoutine />
            </div>               
            <div className="Category">
              <AddOrUpdateCategory />
            </div>            
          </div>
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
