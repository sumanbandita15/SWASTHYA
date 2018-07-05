import React, { Component } from 'react';
import './AddOrUpdateCategory.css';
import {connect} from 'react-redux';

class AddOrUpdateCategory extends Component {
  render() { 
    const values = this.props.category.map((category) => (
      <option value={category.value} key={category.id} > {category.category} </option>
    ));

    return (
      <div className="AddOrUpdateCategory">
        <label>YOUR CATEGORIES:</label>
        <div className="OverFlow">{values}</div> 
        <label>ADD NEW CATEGORY:</label>
        <input type="text"></input>
        <div>
          <input type="button" value="SAVE"/>
        </div>        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.categoryReducer.category
});

export default connect(mapStateToProps)(AddOrUpdateCategory);