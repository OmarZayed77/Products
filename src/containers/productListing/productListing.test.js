import React from 'react';
import { shallow } from 'enzyme';
import ProductListing from './productListing';

describe('<ProductListing />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProductListing />);
    expect(wrapper).toMatchSnapshot();
  });
});
