import React, { Component } from 'react';
import Category from './Category';
import Graph from './Graph';
import ShowGraph from './ShowGraph';
import Records from './Records';
import {Redirect} from 'react-router-dom';
import {clearAuthToken   }from '../local-storage';
import AddFitnessRoutine from './AddFitnessRoutine';
import AddOrUpdateCategory from './AddOrUpdateCategory';
import { fetchCategory,fetchGraph } from '../actions';
import {clearAuth} from '../actions/auth';
import { connect } from 'react-redux';
import './Dashboard.css';
import {ModalPopUp} from './ModalPopUp';

export class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state={categoryModalPopUp:false, routineModalPopUp:false};
  }

  componentDidMount() {  
    if(this.props.loggedIn  ){
      this.props.dispatch(fetchCategory());
      this.props.dispatch(fetchGraph());
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
      <div className="dashboard">                    
        <Category />        
        <span>
          <input type='button' value="ADD/UPDATE A NEW CATEGORY" onClick={()=>this.renderCategoryPopUp()} />
          <input type='button' value="ENTER TODAY'S FITNESS ROUTINE" onClick={()=>this.renderFitnessRoutinePopUp()} />          
          <input type='button' value="LOGOUT" onClick={()=>{
            clearAuthToken();
            this.props.dispatch(clearAuth());
          }} />
        </span>
        <ShowGraph/>
        <div className="container"> 
          <div className="Graph">
            <Graph />
          </div>
          <div className="Records">
            <Records />           
          </div> 
          <ModalPopUp showPopUp={routineModalPopUp || categoryModalPopUp} clearPopUpState={()=> this.clearAllPopUps()}>
            {()=>{
              if(routineModalPopUp){
                return <AddFitnessRoutine/>;
              }
              else if(categoryModalPopUp){
                return <AddOrUpdateCategory/>;
              }
            }}
            </ModalPopUp>          
        </div>      
      </div>
    );
  }
}
const mapStateToProps = (state) => {  
    return {  loggedIn: state.auth.currentUser}  
}

export default connect(mapStateToProps)(Dashboard);