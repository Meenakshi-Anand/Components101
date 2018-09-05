import { RECEIVE_INFORMATION,
         RECEIVE_INFO,
         REMOVE_INFO,
         INFO_ERROR } from '../actions/info_actions';
import merge from 'lodash/merge';

const informationReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_INFORMATION:
      action.information.forEach( info => {
        nextState[info.id] = info;
      });
      return nextState;
    case RECEIVE_INFO:
      const newInfo = {[action.info.id]: action.info};
      return merge({}, state, newInfo);
    case REMOVE_INFO:
      nextState = merge({}, state);
      delete nextState[action.info.id];
      return nextState;
    case INFO_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default informationReducer;
