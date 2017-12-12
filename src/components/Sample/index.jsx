// @flow

import React from 'react';
import { connect } from 'react-redux';
import { setSample1, setSample2 } from '../../actions/actionCreators';

const Sample = (props: {
  sample1: string,
  sample2: string,
  changeSample1: Function,
  changeSample2: Function
}) => (
  <div>
    <h3>Sample 1</h3>
    <input onChange={props.changeSample1} type="text" />
    <p>{props.sample1}</p>
    <h3>Sample 2</h3>
    <input onChange={props.changeSample2} type="text" />
    <p>{props.sample2}</p>
  </div>
);

const mapStateToProps = state => ({
  sample1: state.sample1,
  sample2: state.sample2
});
const mapDispatchToProps = dispatch => ({
  changeSample1(event) {
    dispatch(setSample1(event.target.value));
  },
  changeSample2(event) {
    dispatch(setSample2(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
