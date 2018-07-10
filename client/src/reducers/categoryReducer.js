import {
  FETCH_CATEGORY_SUCCESS,
  SELECT_CATEGORY
} from '../actions';

const initialState = {
  category: [''],
  selected: 'ALL'
};

const categoryReducer = (state = initialState, action) => {

  switch(action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.category
      };

    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.selected
      };

    default: 
    return state;
  }  
};

export default categoryReducer;