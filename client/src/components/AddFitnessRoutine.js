import {connect } from 'react-redux';
import React, { Component } from 'react';
import './AddFitnessRoutine.css';
import Category from './Category';
import Title from './Title';
import Rating from './Rating';
import Description from './Description';
import {addRecord }from '../actions';
import './URL.css';
import './Title.css';
import './Rating.css';
import './Description.css';

export  class AddFitnessRoutine extends Component {
  constructor(props){
    super(props);
    this.state={category:null};
  }
  onDropDownChange(val){
    this.setState({category:val});
  }
  saveRecord(){

    let record ={
        categoryId: this.state.category,
        url: this.refs['url'].value,
        title: this.refs['title'].value,
        rating: this.refs['rating'].value,
        description: this.refs['description'].value
    }

    this.props.dispatch(addRecord(record));
  }
  render() { 
    return (
      <div className="AddFitnessRoutine">
          <Category onChange={(val) => {this.onDropDownChange(val)}} />    
          <div className="URL">
            <label> URL (Optional):</label>
            <input type="url" ref="url"></input>
          </div>
          <div className="Title">
            <label>TITLE:</label>
            <input type="text" ref="title"></input>
          </div>
          <div className="Rating">
            <label>RATING:</label>
            <input type="text" ref="rating"></input>
          </div>
          <div className="Description">
            <label>DESCRIPTION:</label> 
            <textarea name="Description" rows="10" cols="30" ref="description"></textarea>
          </div>
        <input type="button" value="SAVE" onClick={(e)=>{
          e.stopPropagation();
          this.saveRecord();

        }}/>
      </div>
    );
  }
}

export default connect()(AddFitnessRoutine);

