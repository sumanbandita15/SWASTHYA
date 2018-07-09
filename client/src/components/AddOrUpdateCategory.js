import React, { Component } from 'react';
import './AddOrUpdateCategory.css';
import {connect, } from 'react-redux';
import {updateAndAddCategory }from '../actions';

class AddOrUpdateCategory extends Component {
  saveCategories(){
    const {category} = this.props;
    let categoryUpdates = category.map((item,index)=>({id: item.id, 
                                category:(this.refs[`userCategory${index}`].value)}));

      let result = {categoryUpdates};
      const newCategory = this.refs["newUserCategory"].value.toString().trim();
      if(newCategory){
        result = {...result, newCategory};
      }
      this.props.dispatch(updateAndAddCategory(result));
  }
  render() { 
    const values = this.props.category.map((category,index) => (
      <input type="text" defaultValue={category.category} key={index} ref={`userCategory${index}`}/> 
    ));


    return (
      <div className="AddOrUpdateCategory">
        <label>YOUR CATEGORIES:</label>
        <div className="OverFlow">{values}</div> 
        <label>ADD NEW CATEGORY:</label>
        <input type="text" ref="newUserCategory"/>
        <div>
          <input type="button" value="SAVE" onClick={ event => {
            event.stopPropagation();
            this.saveCategories();}
            
            } />
        </div>        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.categoryReducer.category
});

export default connect(mapStateToProps)(AddOrUpdateCategory);