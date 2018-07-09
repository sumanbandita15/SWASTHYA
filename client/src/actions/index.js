import { API_BASE_URL } from '../config';
import { promises } from 'fs';
//import {normalizeResponseErrors} from './utils';

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

export const fetchCategory = () => (dispatch,getState) => {    
  const authToken = getState().auth.authToken;
    return  fetch(`${API_BASE_URL}/category/`, {
      method: 'GET',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`
      }
    })
        .then(response => response.json())
        .then(obj => dispatch(fetchCategorySuccess(obj)))
        .catch(err => console.log(err));
};

export const updateAndAddCategory = (userChanges) => (dispatch,getState) => {   
  const authToken = getState().auth.authToken; 
  let postCategoryResp = null;
  if(userChanges.newCategory){
    //do the post
    postCategoryResp = fetch(`${API_BASE_URL}/category/`, {
      method: 'POST',
      headers: {
          // Provide our auth token as credentials
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json"
      },
      body:JSON.stringify({category:userChanges.newCategory})
    }).then(response => response.json())
  }

  let putCategoryResp = fetch(`${API_BASE_URL}/category/`, {
                        method: 'PUT',
                        headers: {
                            // Provide our auth token as credentials
                            Authorization: `Bearer ${authToken}`,
                            "Content-Type": "application/json"
                        },
                        body:JSON.stringify({category:userChanges.categoryUpdates})
                      }).then(response => response.json());
  
    return  Promise.all([postCategoryResp,putCategoryResp])
        .then(responses => 
          { 
            let results = [...responses[1].values];

            if(responses[0]){
              results.concat(responses[0].result);
            }
            dispatch(fetchCategorySuccess(results));
          })
        .catch(err => console.log(err));
};

export const fetchGraph = () => (dispatch,getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/graph/`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }

  })
    .then(response => response.json())
    .then(obj => dispatch(fetchGraphSuccess(obj.coordinates)))
    .catch(err => console.log(err));
}


