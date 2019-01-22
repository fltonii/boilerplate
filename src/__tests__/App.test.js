import Login from '../components/Login';

test('Login', () => {
  const { queryByText } = render(<Login />);
  const header = queryByText('Login');
  expect(header.innerHTML).toBe('Login');
});
