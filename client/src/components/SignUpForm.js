import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty,email, passwordMatch,length, isTrimmed} from './validation';
import Input from './validation/Input';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';

import './SignUpForm.css';
const passwordLength = length({min: 10, max: 72});

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const {email, password, firstName, lastName} = values;
        const user = {email, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)))
            .then(()=> this.props.history.push("/dashboard") );
    } 
    render() {
        return (
            <form role="registration form" 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )} className="signUpForm">                
                <label htmlFor="firstName">First Name: </label>
                <Field name="firstName" id="firstName" type="text" component={Input} validate={[required, nonEmpty]}/>
                <label htmlFor="lastName">Last Name: </label>
                <Field name="lastName" id="lastName" type="text" component={Input} validate={[required, nonEmpty]}/>
                <label htmlFor="email">Email address</label>
                <Field name="email" id="email" type="email" component={Input} validate={[required, nonEmpty, email]}/>
                <label htmlFor="password">Password: </label>
                <Field name="password" id="password" component={Input} type="password" validate={[required,nonEmpty,passwordLength, isTrimmed]}/>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <Field name="confirmPassword" id="confirmPassword" component={Input} type="password" validate={[required,nonEmpty,passwordMatch]}/>                               

                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signUp',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpForm);