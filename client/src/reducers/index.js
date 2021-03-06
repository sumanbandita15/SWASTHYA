
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import recordReducer from './recordReducer';
import graphReducer from './graphReducer';
import authReducer from './auth';
import uiReducer from './uiReducer';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  ui:uiReducer,
  categoryReducer,
  graphReducer,
  auth: authReducer,
  form: formReducer,
  recordReducer
});

export default rootReducer;