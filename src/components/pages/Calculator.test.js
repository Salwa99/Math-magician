import React from 'react';
import { render } from '@testing-library/react';
import MathMagicianApp from './Calculator';

describe('Math Magician App', () => {
  it('should have a length of 1', () => {
    const { container } = render(<MathMagicianApp />);
    expect(container.querySelectorAll('.App')).toHaveLength(1);
  });
});
