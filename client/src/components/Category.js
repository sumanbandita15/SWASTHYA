import React from 'react';
import './Category.css';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';

export class Category extends React.Component{        
  onChange(e){
    const {onChange,dispatch } = this.props;
    dispatch(selectCategory(e.target.value));
    onChange && onChange(e.target.value);
  }

  render() {     
    let values = this.props.category.map((category) => (
      <option value={category.id} key={category.id} > {category.category} </option>
    ));
    const all = <option value="ALL" key="0" > ALL </option>
    values = [
      all,
      ...values
    ];  
    
    
    return (
      <span>
        <label> CATEGORY: </label>
        <select className="DropDown" onChange={e => this.onChange(e)}>
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