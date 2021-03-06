import React, { Component } from 'react';
import './Graph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,XAxis,YAxis} from 'react-vis';
import {connect} from 'react-redux';
import moment from "moment";
import {RecordSorter} from "./Records";

export const filterRecordsBasedOnDates = (to_from_date) => (record) =>{
  let recordDate= moment(record.createdAt);
  let selectedFromDate = moment(to_from_date.selectedDateFrom);
  let selectedToDate =  moment(to_from_date.selectedDateTo);
  console.log(JSON.stringify(to_from_date),JSON.stringify(record));
  console.log("SELECTED TO DATE  " +JSON.stringify(selectedToDate));
  return recordDate.isBetween(selectedFromDate,selectedToDate);// consider equal to as well 
}

const myFilter = (selected)=> (record) => {
  if(selected === 'ALL'){
    return true;
  }else{
    return (record.categoryId === selected);
  }
};

class Graph extends Component {
  render() {    
    const {records,graph_to_from_dates,selected, containerHeight,containerWidth} = this.props;    
    let data=[];
    if(records.length && graph_to_from_dates){
      data = records.filter(record => myFilter(selected)(record) && 
                            filterRecordsBasedOnDates(graph_to_from_dates)(record))
                    .sort(RecordSorter)
             .map(record => ({x:record.createdAt.toString().substring(5,10), y:record.rating}));
    }    
    return (
      <div className="Graph">
        <XYPlot height={containerHeight} width={containerWidth} xType="ordinal" yDomain={[0,100]}> 
          <XAxis  title="Date" />
          <YAxis  title="Rating" />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  records: state.recordReducer.record,
  graph_to_from_dates: state.ui.graph_to_from_dates,
  selected: state.categoryReducer.selected
});

export default connect(mapStateToProps)(Graph);