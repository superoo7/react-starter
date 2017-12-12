// @flow
import { SAMPLE1, SAMPLE2 } from './actions';

export function setSample1(sample: string) {
  return { type: SAMPLE1, payload: sample };
}

export function setSample2(sample: string) {
  return { type: SAMPLE2, payload: sample };
}
