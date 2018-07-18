import React, { Component } from 'react';
import {connect } from 'react-redux';
import moment from "moment";
import { setGraphDates } from '../actions';

class ShowGraph extends Component {
  
  componentDidMount(){
    this.props.dispatch(setGraphDates({...this.state}));
  }

  componentDidUpdate(){
    this.props.dispatch(setGraphDates({...this.state}));
  }

  constructor(){    
    super();
    this.state = {            
      selectedDateTo: moment().format("YYYY-MM-DD"),
      selectedDateFrom: moment().subtract(30,'day').format("YYYY-MM-DD"),
      from: {
        max: moment().subtract(30,'day').format("YYYY-MM-DD"),
        min: "",
      },
      to: {
        max: "",
        min:""
      }
    }

  }
  // FROM DATE CHANGE EVENT 
  onFromDateChange(e){    
    //console.log(moment(e,"YYYY-MM-DD"));
    this.setState({
      selectedDateFrom: moment(e,"YYYY-MM-DD HH:mm:ss").startOf('day').format("YYYY-MM-DD HH:mm:ss"),
      selectedDateTo: moment(e,"YYYY-MM-DD HH:mm:ss").add(30,'day').endOf('day').format("YYYY-MM-DD HH:mm:ss")//moment(e,"YYYY-MM-DD").add(30,'day').endOf('day').format("YYYY-MM-DD")
    });
  }

  //TO DATE CHANGE EVENT
  onToDateChange(e){    
    this.setState({      
      selectedDateFrom: moment(e,"YYYY-MM-DD").endOf('day').subtract(30,'day').format("YYYY-MM-DD"),//().startOf()
      selectedDateTo: moment(e,"YYYY-MM-DD HH:mm:ss").endOf('day').format("YYYY-MM-DD HH:mm:ss")
    });
  }


  render() {      
    return (
      <div>
        <label> FROM: </label>
        <input type='date' name = 'FROM' max={this.state.from.max} value={moment(this.state.selectedDateFrom).format("YYYY-MM-DD")} onChange={e => this.onFromDateChange(e.target.value)}/>
        <label> TO:</label>
        <input type='date' name = 'TO' min="" max="" value={moment(this.state.selectedDateTo).format("YYYY-MM-DD")} onChange={e => this.onToDateChange(e.target.value)}/>         
      </div>
    );
  }
}

//if the selected date in not within 30 days - tell them to select 
export default connect()(ShowGraph);