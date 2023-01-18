import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

it('renders when there is quote', () => {
  const quote = renderer.create(<Quote />).toJSON();
  expect(quote).toMatchSnapshot();
});
