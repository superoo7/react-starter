// @flow
import { SAMPLE1, SAMPLE2 } from '../actions/actions';

export const sample1 = (state: string = '', action: Action) => {
  if (action.type === SAMPLE1) {
    return action.payload;
  }
  return state;
};

export const sample2 = (state: string = '', action: Action) => {
  if (action.type === SAMPLE2) {
    return action.payload;
  }
  return state;
};
