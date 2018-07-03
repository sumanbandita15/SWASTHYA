import React, { Component } from 'react';
import moment from "moment";

class ShowGraph extends Component {
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
    console.log(moment(e,"YYYY-MM-DD"));
    this.setState({
      selectedDateFrom: e,
      selectedDateTo: moment(e,"YYYY-MM-DD").add(30,'day').format("YYYY-MM-DD")
    });
  }

  //TO DATE CHANGE EVENT
  onToDateChange(e){
    this.setState({
      selectedDateFrom: moment(e,"YYYY-MM-DD").subtract(30,'day').format("YYYY-MM-DD"),
      selectedDateTo: e
    });
  }


  render() {      
    return (
      <div>
        <label> FROM: </label>
        <input type='date' name = 'FROM' max={this.state.from.max} value={this.state.selectedDateFrom} onChange={e => this.onFromDateChange(e.target.value)}/>
        <label> TO:</label>
        <input type='date' name = 'TO' min="" max="" value={this.state.selectedDateTo} onChange={e => this.onToDateChange(e.target.value)}/> 
        <input type='button' value="SHOW GRAPH" />
      </div>
    );
  }
}

//if the selected date in not within 30 days - tell them to select 

export default ShowGraph;