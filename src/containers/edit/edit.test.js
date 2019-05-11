import React from 'react';
import { shallow } from 'enzyme';
import Edit from './edit';

describe('<Edit />', () => {
  test('renders', () => {
    const wrapper = shallow(<Edit />);
    expect(wrapper).toMatchSnapshot();
  });
});
