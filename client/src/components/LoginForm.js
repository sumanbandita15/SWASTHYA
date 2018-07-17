import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty,email, isTrimmed} from './validation';
import Input from './validation/Input';
import {login} from '../actions/auth';
import './LoginForm.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.email, values.password));
    } 
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form role="login form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )} className="loginForm">                
                {error}
                <label htmlFor="email">User Name/Email : </label>
                <Field name="email" id="email" type="text" component={Input} validate={[required, nonEmpty, email,isTrimmed]}/>         
                <label htmlFor="password">Password: </label>
                <Field name="password" id="password" component={Input} type="password" validate={[required,nonEmpty]}/>           
                <button disabled={this.props.pristine || this.props.submitting}>Login</button> 
                {(this.props.submitting) ?<div className="loader"></div> : null}
                
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', 'email'))
})(LoginForm);