import {
  FETCH_RECORD_SUCCESS
} from '../actions';

const initialState = {
  record: []
};

const recordReducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_RECORD_SUCCESS:
      return {
        ...state,
        record: action.record
      };

    default: 
    return state;
  }  
};

export default recordReducer;