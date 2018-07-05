import React, { Component } from 'react';
import './Rating.css';

export default class Rating extends Component {
  render() { 

    return (
      <div className="Rating">
        <label>RATING:</label>
        <input type="text"></input>
      </div>
    );
  }
}

