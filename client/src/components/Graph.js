import React, { Component } from 'react';
import './Graph.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,XAxis,YAxis} from 'react-vis';
import {connect} from 'react-redux';

class Graph extends Component {
  render() {    
    const data = this.props.coordinates;

    return (
      <div className="Graph">
        <XYPlot height={500} width={900}>
          <XAxis  title="X" position="start"/>
          <YAxis  title="Y" />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  coordinates: state.graphReducer.coordinates
});

export default connect(mapStateToProps)(Graph);