import { combineReducers } from 'redux';
import { sample1, sample2 } from './sample';

const rootReducer = combineReducers({
  sample1,
  sample2
});

export default rootReducer;
