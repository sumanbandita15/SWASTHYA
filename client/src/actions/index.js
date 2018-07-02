import { API_BASE_URL } from '../config';

export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    category
  }
};

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const selectCategory = (selected) => {
  return {
    type: SELECT_CATEGORY,
    selected
  }
};

export const fetchCategory = () => dispatch => {  
      fetch(`${API_BASE_URL}/category`)
        .then(response => response.json())
        .then(obj => dispatch(fetchCategorySuccess(obj.category)))
        .catch(err => console.log(err));
  }
