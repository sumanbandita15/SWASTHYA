import React, { Component } from 'react';
import './URL.css';

export default class URL extends Component {
  render() { 

    return (
      <div className="URL">
        <label> URL (Optional):</label>
        <input type="text"></input>
      </div>
    );
  }
}

