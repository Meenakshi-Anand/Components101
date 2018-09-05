import { combineReducers } from 'redux';

import informationReducer from './information_reducer';


const rootReducer = combineReducers({
  information: informationReducer,
});

export default rootReducer;
