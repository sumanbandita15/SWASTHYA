import {
  SET_AUTH_TOKEN,
  setAuthToken,
  CLEAR_AUTH,
  clearAuth,
  AUTH_REQUEST,
  authRequest,
  AUTH_SUCCESS,
  authSuccess,
  AUTH_ERROR,
  authError
} from '../actions/auth';

describe.skip('auth', () => {
  it('Should return the action', () => {
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IlJhaiIsImxhc3ROYW1lIjoiTmF5YWsiLCJlbWFpbCI6InJhanVzZXJAZ21haWwuY29tIiwiaWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEiLCJ1c2VySWQiOiIzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMDEifSwiaWF0IjoxNTMxNDEyMjI1LCJleHAiOjE1MzIwMTcwMjUsInN1YiI6InJhanVzZXJAZ21haWwuY29tIn0.1D46mzFr2rFzZ6WtSu1FWJMc91l-4So3Rk_jnVsDZHk';
      const action = setAuthToken(authToken);
      expect(action.type).toEqual(SET_AUTH_TOKEN);
      expect(action.authToken).toEqual(authToken);
  });

  it('Should return the action', () => {    
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);    
  });

  it('Should return the action', () => {    
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);    
  });

  it('Should return the action', () => {    
    const currentUser = {
      email: 'test@test.com',
      password: 'baseball1234'
    };

    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS); 
    expect(action.currentUser).toEqual(currentUser);    
  });

  it('Should return the action', () => {    
    const error =  {
      Error: 'Unprocessable Entity'
    };

    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR); 
    expect(action.error).toEqual(error);    
  });
});
