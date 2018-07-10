import React, { Component } from 'react';
import './Graph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,XAxis,YAxis} from 'react-vis';
import {connect} from 'react-redux';
import moment from "moment";

class Graph extends Component {
  render() {    
    const {records,graph_to_from_dates} = this.props;
    //const data = this.props.coordinates;
    let data=[];
    if(records.length && graph_to_from_dates){
      data = records.filter((record,index) =>{
          let recordDate= moment(record.createdAt);
          let selectedFromDate = moment(graph_to_from_dates.selectedDateFrom);
          let selectedToDate =  moment(graph_to_from_dates.selectedDateTo);


        return recordDate.isBetween(selectedFromDate,selectedToDate);
      }).map(record => ({x:moment(record.createdAt).format("MM-DD"), y:record.rating}));
    }
    // const data = [
    //   {x: '26-7', y: 80},
    //   {x: '28-7', y: 5},
    //   {x: '29-7', y: 4},
    //   {x: '30-7', y: 9},
    //   {x: '1-8', y: 10},
    //   {x: '2-8', y: 7},
    //   {x: '3-8', y: 6},
    //   {x: '4-8', y: 3},
    //   {x: '5-8', y: 2},
    //   {x: '6-8', y: 0}
    // ];
    return (
      <div className="Graph">
        <XYPlot height={500} width={700} xType="ordinal" yDomain={[0,100]}> 
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
  graph_to_from_dates: state.ui.graph_to_from_dates
});

export default connect(mapStateToProps)(Graph);