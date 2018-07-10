import React, { Component } from 'react';
import {deleteRecord} from '../actions';
import './IndividualRecords.css';

export default class IndividualRecords extends Component {  
  onClick(){
    this.props.dispatch(deleteRecord(this.props.id));
  }
  render() {    
    const {description,createdAt,categoryName} = this.props;       
    return (
      <div className="IndividualRecords">
        <div className="Date">
          <label className="labelName">Date: </label>
          <label>{createdAt.toString().substring(0,10)} </label> 
        </div>        
        <div className="Category">
          <label className="labelName">Category: </label>
          <label>{categoryName} </label>            
        </div>
        <div className="DetailedView">
          <label className="labelName">Description: </label>
          <label>{description}</label>            
        </div>
        <input type='button' value="DELETE" onClick={(e) => this.onClick()}/>          
      </div>
    );
  }
}