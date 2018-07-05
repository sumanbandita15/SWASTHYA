import React, { Component } from 'react';
import './IndividualRecords.css';

export default class IndividualRecords extends Component {

  render() {
    return (
      <div className="IndividualRecords">
        <div className="Date">
          <label className="labelName">Date: </label>
          <label>07-03 </label> 
        </div>        
        <div className="Category">
          <label className="labelName">Category: </label>
          <label>Yoga </label>            
        </div>
        <div className="DetailedView">
          <label className="labelName">Description: </label>
          <label>Did yoga for 30 mins. Was better as compared to yesterday's </label>            
        </div>
        <input type='button' value="DELETE" />          
      </div>
    );
  }
}