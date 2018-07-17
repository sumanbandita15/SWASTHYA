import {SubmissionError} from 'redux-form';
import { setRegStart, setRegSuccess,login, setRegFailure} from './auth';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerUser = (user,history, dispatch) => {
        dispatch(setRegStart());
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            dispatch(setRegSuccess());
            return res.json();})
            .then(() => dispatch(login(user.email, user.password)))
            .then(()=> history.push("/dashboard") )    
        .catch(err => {
            dispatch(setRegFailure());
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            }
        });
};
