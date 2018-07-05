import React, { Component } from 'react';
import IndividualRecords from './IndividualRecords';
import './Records.css';

export default class Records extends Component {

  render() {
    return (
      <div className="Records">
        <h3>RECORDS:</h3>
        <IndividualRecords />
        <IndividualRecords />
        <IndividualRecords />
        <IndividualRecords />        
      </div>
    );
  }
}