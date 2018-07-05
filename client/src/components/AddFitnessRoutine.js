import React, { Component } from 'react';
import './AddFitnessRoutine.css';
import Category from './Category';
import URL from './URL';
import Title from './Title';

export default class AddFitnessRoutine extends Component {
  render() { 

    return (
      <div className="AddFitnessRoutine">
        <Category />    
        <URL />  
        <Title />  
      </div>
    );
  }
}

