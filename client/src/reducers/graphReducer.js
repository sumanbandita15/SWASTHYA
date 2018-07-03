import {
  FETCH_GRAPH_SUCCESS  
} from '../actions';

const initialState = {
  coordinates : []
};

const graphReducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_GRAPH_SUCCESS:
      return {
        ...state,
        coordinates: action.coordinates
      };

    default: 
    return state;
  }  
};

export default graphReducer;