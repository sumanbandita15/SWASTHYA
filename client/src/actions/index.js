import { API_BASE_URL } from '../config';

const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    category
  }
};

export const fetchCategory = () => {
  return dispatch => {
      fetch(`${API_BASE_URL}/category`)
        .then(response => response.json())
        .then(obj => dispatch(fetchCategorySuccess(Object.category)))
        .catch(err => console.log(err));
    }
} 