import React, { Component } from 'react';
import './AddFitnessRoutine.css';
import Category from './Category';
import URL from './URL';
import Title from './Title';
import Rating from './Rating';
import Description from './Description';

export default class AddFitnessRoutine extends Component {
  render() { 

    return (
      <div className="AddFitnessRoutine">
        <Category />    
        <URL />  
        <Title />  
        <Rating />  
        <Description />
        <input type="button" value="SAVE"/>
      </div>
    );
  }
}

