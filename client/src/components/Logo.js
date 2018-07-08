import React from 'react';
import logo from './images.png';
import './Logo.css';

export default function Logo(){
    return (
      <div className="App">        
          <img src={logo} className="App-logo" alt="logo" />        
      </div>
    );  
}


