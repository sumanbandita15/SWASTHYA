import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty,email, passwordMatch} from './validation';
import Input from './validation/Input';
import Logo from './Logo';
import './LoginForm.css';

export class LoginForm extends React.Component {
    onSubmit(values) {        
        console.log(values);        
        this.props.history.push(`/dashboard`);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )} className="loginForm">
                <Logo />
                <label htmlFor="userName">User Name/Email : </label>
                <Field name="userName" id="userName" type="text" component={Input} validate={[required, nonEmpty, email]}/>         
                <label htmlFor="password">Password: </label>
                <Field name="password" id="password" component={Input} type="password" validate={[required,nonEmpty]}/>           
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);