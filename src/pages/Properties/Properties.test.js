import { render, screen } from '@testing-library/react';
import Properties from './Properties';

test('renders the properties page', () => {
  render(<Properties />);
  const linkElement = screen.getByText(/Properties Screen/i);
  expect(linkElement).toBeInTheDocument();
});
