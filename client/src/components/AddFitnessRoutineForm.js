import React, { Component } from 'react';
import './AddFitnessRoutineForm.css';
import CategoryFitnessRoutine from './validation/CategoryFitnessRoutine';
import {required, nonEmpty,number,length, selected} from './validation';
import {addRecord }from '../actions';
import Input from './validation/Input';
import {reduxForm, Field, focus} from 'redux-form';
import {connect } from 'react-redux';

export  class AddFitnessRoutineForm extends Component {
  onSubmit(value){
    const {categoryFitness, url, title, rating,description} = value;
    let record = {categoryId:categoryFitness, url, title, rating,description};
    this.props.dispatch(addRecord(record));
    this.props.clearPopUpState();
  }
  render() {    
    return (
        <form role="adding fitness record form" onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
      )} className="addFitnessRoutine">   
        <Field name="categoryFitness" id="categoryFitness"  component={CategoryFitnessRoutine} validate={[selected]} /> 
          <div className="addFitnessRoutineUrl">            
            <label> URL (Optional):</label>
            <Field name="url" id="url" type="text" component={Input} />             
          </div>
          <div className="addFitnessRoutineTitle">            
            <label> Title: </label>
            <Field name="title" id="title" type="text" component={Input} validate={[required, nonEmpty]}/>             
          </div>
          <div className="addFitnessRoutineRating">            
            <label> Rating: </label>
            <Field name="rating" id="rating" type="text" component={Input} validate={[required, nonEmpty,number]}/>             
          </div>
          <div className="addFitnessRoutineDescription">            
            <label> Description: </label>
            <Field name="description" id="description" type="textarea" component="textarea" className="description"/>             
          </div>

          <button type="submit">SAVE</button>
        </form>
    );
  }
}

export default reduxForm({
  form: 'AddFitnessRoutineForm',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('AddFitnessRoutineForm', Object.keys(errors)[0]))
})(connect()(AddFitnessRoutineForm));