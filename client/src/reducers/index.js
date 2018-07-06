
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import graphReducer from './graphReducer';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  categoryReducer,
  graphReducer,
  form: formReducer
});

export default rootReducer;