import React, { Component } from 'react';
import Category from '../Category';

export default class CategoryFitnessRoutine extends Component {
  render() {
    const { input: { value, onChange } } = this.props;
    return (           
      <Category onCategoryChange={(selectedValue)=> {
        return onChange(selectedValue)}} {...this.props.value} />              
    );
  }
}