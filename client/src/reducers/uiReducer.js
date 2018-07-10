import {
  SET_GRAPH_TO_FROM_DATES  
} from '../actions';

const initialState = {
  graph_to_from_dates : null
};

const uiReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_GRAPH_TO_FROM_DATES:
      return {
        ...state,
        graph_to_from_dates: action.payload
      };

    default: 
    return state;
  }  
};

export default uiReducer;