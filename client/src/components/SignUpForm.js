import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty,email, passwordMatch} from './validation';
import Input from './validation/Input';
import Logo from './Logo';
import './SignUpForm.css';

export class SignUpForm extends React.Component {
    onSubmit(values) {        
        console.log(values);        
        this.props.history.push(`/dashboard`);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )} className="signUpForm">
                <Logo />
                <label htmlFor="firstName">First Name: </label>
                <Field name="firstName" id="firstName" type="text" component={Input} validate={[required, nonEmpty]}/>
                <label htmlFor="lastName">Last Name: </label>
                <Field name="lastName" id="lastName" type="text" component={Input} validate={[required, nonEmpty]}/>
                <label htmlFor="email">Email address</label>
                <Field name="email" id="email" type="email" component={Input} validate={[required, nonEmpty, email]}/>
                <label htmlFor="password">Password: </label>
                <Field name="password" id="password" component={Input} type="password" validate={[required,nonEmpty]}/>
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