import React, { Component } from 'react';
import IndividualRecords from './IndividualRecords';
import './Records.css';
import {connect } from 'react-redux';

export class Records extends Component {

  render() {
    let {record, category}=this.props;
    record = record.map(recordItem => {      
      const recCat = category.find((item)=> item.id === recordItem.categoryId);
      let categoryName = "";
      categoryName = recCat && recCat.category;            
      return {...recordItem, categoryName};
       
    });
    if(this.props.selected !== 'ALL'){
      record = record.filter(item => item.categoryId === this.props.selected);
    }
    
    return (
      <div className="RecordsComponent">
        <h3>RECORDS:</h3>
        {
          record.map((item, index )=><IndividualRecords key={index} {...item}/> )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  record: state.recordReducer.record,
  category:state.categoryReducer.category,
  selected: state.categoryReducer.selected
});

export default connect(mapStateToProps)(Records);