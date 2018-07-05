import React from 'react';
import './Category.css';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';

class Category extends React.Component{        
  onChange(e){
    this.props.dispatch(selectCategory(e.target.value));
  }

  render() {    
    console.log(this.props);
    const values = this.props.category.map((category) => (
      <option value={category.value} key={category.id} > {category.category} </option>
    ));
    
    return (
      <span>
        <label> CATEGORY: </label>
        <select onChange={e => this.onChange(e)}>
          {values}
        </select>
      </span>      
    );
  }  
}

const mapStateToProps = state => ({
   category: state.categoryReducer.category
});

export default connect(mapStateToProps)(Category);