
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import graphReducer from './graphReducer';

const rootReducer = combineReducers({
  categoryReducer,
  graphReducer
});

export default rootReducer;