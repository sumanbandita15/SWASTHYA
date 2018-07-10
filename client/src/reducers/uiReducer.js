import {
  SET_GRAPH_TO_FROM_DATES ,
  SELECTED_CATEGORY_RECRODS
} from '../actions';

const initialState = {
  graph_to_from_dates : null,
  selected_category_id : 'all'
};

const uiReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_GRAPH_TO_FROM_DATES:
      return {
        ...state,
        graph_to_from_dates: action.payload
      };

    case SELECTED_CATEGORY_RECRODS:
      return {
        ...state,
        selected_category_id: action.selected

      };

    default: 
    return state;
  }  
};

export default uiReducer;