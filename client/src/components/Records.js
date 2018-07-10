import React, { Component } from 'react';
import IndividualRecords from './IndividualRecords';
import './Records.css';
import {connect } from 'react-redux';
import {filterRecordsBasedOnDates} from './Graph';

export class Records extends Component {

  render() {
    let {record, category,record_to_from_dates,selected}=this.props;
    record = record.map(recordItem => {      
      const recCat = category.find((item)=> item.id === recordItem.categoryId);
      let categoryName = "";
      categoryName = recCat && recCat.category;            
      return {...recordItem, categoryName};
       
    });
    
      record = record.filter(item => (item.categoryId === selected || (selected === 'ALL')) && filterRecordsBasedOnDates(record_to_from_dates)(item));
    
    return (
      <div className="RecordsComponent">
        <h3>RECORDS:</h3>
        {
          record.map((item, index )=><IndividualRecords key={index} dispatch={this.props.dispatch} {...item}/> )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  record: state.recordReducer.record,
  category:state.categoryReducer.category,
  selected: state.categoryReducer.selected,
  record_to_from_dates: state.ui.graph_to_from_dates  
});

export default connect(mapStateToProps)(Records);