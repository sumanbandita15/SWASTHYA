import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  render() { 

    return (
      <div className="Title">
        <label>TITLE:</label>
        <input type="text"></input>
      </div>
    );
  }
}
