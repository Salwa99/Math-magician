import React from 'react';
import MathMagicianApp from '../pages/Calculator';
import { render } from '@testing-library/react';

describe('Math Magician App', () => {
  it('should have a length of 1', () => {
    const { container } = render(<MathMagicianApp />);
    expect(container.querySelectorAll('.App')).toHaveLength(1);
  });

});