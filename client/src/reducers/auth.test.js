import {  
  setAuthToken,
  clearAuth,  
  authRequest,  
  authSuccess,  
  authError 
} from '../actions/auth';

import reducer from './auth';

const initialState = {
  authToken: null, 
  currentUser: null,
  loading: false,
  error: null
};

const modifiedState = {
  authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IlJhaiIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InJhanVzZXJAZ21haWwuY29tIiwiaWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEiLCJ1c2VySWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEifSwiaWF0IjoxNTMxNDEyMjI1LCJleHAiOjE1MzIwMTcwMjUsInN1YiI6InJhanVzZXJAZ21haWwuY29tIn0.1D46mzFr2rFzZ6WtSu1FWJMc91l-4So3Rk_jnVsDZHk',
  currentUser: {
    email: 'rajuser@gmail.com',
    password: 'baseball'    
  },
  loading: false,
  error: null
}

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IlJhaiIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InJhanVzZXJAZ21haWwuY29tIiwiaWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEiLCJ1c2VySWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEifSwiaWF0IjoxNTMxNDEyMjI1LCJleHAiOjE1MzIwMTcwMjUsInN1YiI6InJhanVzZXJAZ21haWwuY29tIn0.1D46mzFr2rFzZ6WtSu1FWJMc91l-4So3Rk_jnVsDZHk';
const error = {
  TypeError: 'Cannot read property \'then\' of undefined'
};

describe('reducer', () => {  
  it('Should set the initial state when nothing is passed in', () => {
    let state;
    state = reducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  describe('setAuthToken', () => {
    let state;
    it('Should set the auth token when auth token is passed in', () => {            
      state = reducer(initialState, setAuthToken(authToken));
      expect(state).toEqual({
        authToken: authToken, 
        currentUser: null,
        loading: false,
        error: null
      });
    });
  });

  describe('clearAuth', () => {
    let state;
    it('Should clear the auth token', () => {            
      state = reducer(modifiedState, clearAuth());
      expect(state).toEqual(initialState);
    });
  });

  describe('authRequest', () => {
    let state;
    it('Should clear the auth token', () => {            
      state = reducer(modifiedState, authRequest());
      expect(state).toEqual({
        authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IlJhaiIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InJhanVzZXJAZ21haWwuY29tIiwiaWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEiLCJ1c2VySWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEifSwiaWF0IjoxNTMxNDEyMjI1LCJleHAiOjE1MzIwMTcwMjUsInN1YiI6InJhanVzZXJAZ21haWwuY29tIn0.1D46mzFr2rFzZ6WtSu1FWJMc91l-4So3Rk_jnVsDZHk',
        currentUser: {
          email: 'rajuser@gmail.com',
          password: 'baseball'    
        },
        loading: true,
        error: null
      });
    });
  });

  describe('authSuccess', () => {
    let state;
    it('Should have auth token, current user with loading and error set to false and null respoectively', () => {            
      state = reducer(initialState, authSuccess(modifiedState.currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser: {
          email: 'rajuser@gmail.com',
          password: 'baseball'    
        },
        loading: false,
        error: null
      });
    });
  });

  describe('authError', () => {
    let state;
    it('Should have auth token, current user with loading and error set to false and null respoectively', () => {            
      state = reducer(initialState, authError(error));
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error: error
      });
    });
  });
});
