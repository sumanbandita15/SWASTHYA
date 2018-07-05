import React, { Component } from 'react';
import './AddFitnessRoutine.css';
import Category from './Category';
import URL from './URL';

export default class AddFitnessRoutine extends Component {
  render() { 

    return (
      <div className="AddFitnessRoutine">
        <Category />    
        <URL />    
      </div>
    );
  }
}

