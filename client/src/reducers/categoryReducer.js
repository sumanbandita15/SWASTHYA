const initialState = {
  category: ['yoga']
};

const categoryReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return {
        ...state,
        category: action.category
      };

    default: 
    return state;
  }  
};

export default categoryReducer;