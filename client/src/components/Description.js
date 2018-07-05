import React, { Component } from 'react';
import './Description.css';

export default class Description extends Component {
  render() { 

    return (
      <div className="Description">
        <label>DESCRIPTION:</label> 
        <textarea name="Description" rows="10" cols="30"></textarea>
      </div>
    );
  }
}

