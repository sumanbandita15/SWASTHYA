import React, { Component } from 'react';
import './IndividualRecords.css';

export default class IndividualRecords extends Component {

  render() {
    const {description,createdAt,categoryName} = this.props;
    return (
      <div className="IndividualRecords">
        <div className="Date">
          <label className="labelName">Date: </label>
          <label>{createdAt.toString()} </label> 
        </div>        
        <div className="Category">
          <label className="labelName">Category: </label>
          <label>{categoryName} </label>            
        </div>
        <div className="DetailedView">
          <label className="labelName">Description: </label>
          <label>{description}</label>            
        </div>
        <input type='button' value="DELETE" />          
      </div>
    );
  }
}