import React from 'react';
import './Category.css';
import {connect} from 'react-redux';
import {selectCategory} from '../actions';

export class Category extends React.Component{        
  onChange(e){
    const {onCategoryChange,dispatch } = this.props;
    dispatch(selectCategory(e.target.value));
    onCategoryChange && onCategoryChange(e.target.value);

  }

  render() {     
    let values = this.props.category.map((category) => (
      <option value={category.id} key={category.id} > {category.category} </option>
    ));
    const all = <option value="ALL" key="0" > ALL </option>         
    
    const renderSelect = this.props.value
        ? <select className="DropDown" value= {this.props.value} onChange={e => this.onChange(e)}>
        {[all,...values]}
      </select>
        : <select className="DropDown" onChange={e => this.onChange(e)}>{[...values]}</select>

    return (
      <span>
        <label> CATEGORY: </label>        
        {renderSelect}
      </span>      
    );
  }  
}

const mapStateToProps = (state) => ({
   category: state.categoryReducer.category,
});

export default connect(mapStateToProps)(Category);