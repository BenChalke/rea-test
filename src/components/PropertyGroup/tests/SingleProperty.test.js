import { render, screen } from '@testing-library/react';
import SingleProperty from '../SingleProperty';

test('renders the single property component', () => {
  render(<SingleProperty />);
  const linkElement = screen.getByText(/Single Property/i);
  expect(linkElement).toBeInTheDocument();
});
