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

export const FETCH_GRAPH_SUCCESS = 'FETCH_GRAPH_SUCCESS';
export const fetchGraphSuccess = (coordinates) => {
  return {
    type: FETCH_GRAPH_SUCCESS,
    coordinates
  }
};

export const fetchCategory = () => dispatch => {  
      fetch(`${API_BASE_URL}/category/:userId`)
        .then(response => response.json())
        .then(obj => dispatch(fetchCategorySuccess(obj.category)))
        .catch(err => console.log(err));
};

export const fetchGraph = () => dispatch => {
  fetch(`${API_BASE_URL}/graph/:userId`)
    .then(response => response.json())
    .then(obj => dispatch(fetchGraphSuccess(obj.coordinates)))
    .catch(err => console.log(err));
}

