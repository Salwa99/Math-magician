import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('renders when there is welcome sentence', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
