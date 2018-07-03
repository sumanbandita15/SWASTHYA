import React from 'react';
import './Category.css';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';

class Category extends React.Component{        
  onChange(e){
    this.props.dispatch(selectCategory(e.target.value));
  }

  render() {
    
    const values = this.props.category.map((category,i) => (
      <option value={category} key= {i}> {category} </option>
    ));

    return (
      <select onChange={e => this.onChange(e)}>
        {values}
      </select>
    );
  }  
}

const mapStateToProps = state => ({
   category: state.categoryReducer.category 
});

export default connect(mapStateToProps)(Category);