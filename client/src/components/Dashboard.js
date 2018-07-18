import React, { Component } from 'react';
import Category from './Category';
import Graph from './Graph';
import ShowGraph from './ShowGraph';
import Records from './Records';
import {Redirect} from 'react-router-dom';
import {clearAuthToken   }from '../local-storage';
import AddFitnessRoutine from './AddFitnessRoutine';
import AddOrUpdateCategory from './AddOrUpdateCategory';
import { fetchCategory,fetchGraph, fetchRecord } from '../actions';
import {clearAuth} from '../actions/auth';
import { connect } from 'react-redux';
import './Dashboard.css';
import {ModalPopUp} from './ModalPopUp';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

export class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state={categoryModalPopUp:false, routineModalPopUp:false};
  }

  componentDidMount() {  
    if(this.props.loggedIn  ){
      this.props.dispatch(fetchCategory());
      //this.props.dispatch(fetchGraph());- will fetch graph based on dates from showgraph component
      this.props.dispatch(fetchRecord());
    }    
  }

  renderFitnessRoutinePopUp(){
    this.setState(prevState=> Object.assign({},...prevState,{routineModalPopUp:true}) );
  }

  renderCategoryPopUp(){
    this.setState(prevState=> Object.assign({},...prevState,{categoryModalPopUp:true}) );
  }

  clearAllPopUps(){
    this.setState(prevState=> Object.assign({},...prevState,{categoryModalPopUp:false, routineModalPopUp:false}) );
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    const {routineModalPopUp,categoryModalPopUp} = this.state;
    return (
      <main  role="main" className="dashboard">  
        <section  className="controls">
          <Category />        
          <span>
            <input type='button' value="ADD/UPDATE A NEW CATEGORY" onClick={()=>this.renderCategoryPopUp()} />
            <input type='button' value="ENTER TODAY'S FITNESS ROUTINE" onClick={()=>this.renderFitnessRoutinePopUp()} />          
            <input type='button' value="ENTER TODAY'S FITNESS ROUTINE" onClick={()=>this.renderFitnessRoutinePopUp()} />          
            <input type='button' value="LOGOUT" onClick={()=>{
              clearAuthToken();
              this.props.dispatch(clearAuth());
            }} />
          </span>
          <ShowGraph/>
        </section>                  
        <div className="container"> 
          <div className="graphContainer">
            <AutoSizer>
            {({ height, width }) => (
                      <Graph containerWidth={width} containerHeight={height} />
            )}
            </AutoSizer>
          </div>
          <div className="recordsContainer">
            <Records />           
          </div> 
          <ModalPopUp showPopUp={routineModalPopUp || categoryModalPopUp} clearPopUpState={()=> this.clearAllPopUps()}>
            {()=>{
              if(routineModalPopUp){
                return <AddFitnessRoutine clearPopUpState={()=> this.clearAllPopUps()}/>;
              }
              else if(categoryModalPopUp){
                return <AddOrUpdateCategory/>;
              }
            }}
            </ModalPopUp>          
        </div>      
      </main>
    );
  }
}
const mapStateToProps = (state) => {  
    return {  loggedIn: state.auth.currentUser}  
}

export default connect(mapStateToProps)(Dashboard);