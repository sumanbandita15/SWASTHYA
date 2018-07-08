import React, { Component } from 'react';
import Logo from './Logo';
import Category from './Category';
import Graph from './Graph';
import ShowGraph from './ShowGraph';
import Records from './Records';
import AddFitnessRoutine from './AddFitnessRoutine';
import AddOrUpdateCategory from './AddOrUpdateCategory';
import { fetchCategory,fetchGraph } from '../actions';
import { connect } from 'react-redux';
import './Dashboard.css';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategory());
    this.props.dispatch(fetchGraph());
  }

  render() {
    return (
      <div className="dashboard">            
      <Logo />                    
      <Category />        
      <span>
        <input type='button' value="ADD/UPDATE A NEW CATEGORY" />
        <input type='button' value="ENTER TODAY'S FITNESS ROUTINE" />          
      </span>
      <ShowGraph/>
      <div className="container"> 
        <div className="FitnessRoutine">
          <AddFitnessRoutine />
        </div>               
        <div className="Category">
          <AddOrUpdateCategory />
        </div>  
        <div className="Records">
          <Records />           
        </div>           
      </div>
      <Graph />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Dashboard);