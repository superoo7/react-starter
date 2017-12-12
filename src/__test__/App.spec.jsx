import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
test('App renders correctly', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
