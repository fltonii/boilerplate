import React from 'react';
import { render } from 'react-testing-library';
import Login from '../components/Login.tsx';

describe('Login', () => {
  it('Renders with right header', () => {
    const { queryByText } = render(<Login />);
    const header = queryByText('Login');
    expect(header.innerHTML).toBe('Login');
  });
});
