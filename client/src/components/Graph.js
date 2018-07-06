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
        <XYPlot height={500} width={900} xType="ordinal" yDomain={[0,100]}>
          <XAxis  title="Date" />
          <YAxis  title="Rating" />
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