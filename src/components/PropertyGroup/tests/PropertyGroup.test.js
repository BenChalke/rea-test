import { render, screen } from '@testing-library/react';
import PropertyGroup from '../PropertyGroup';

test('renders the property group element', () => {
  render(<PropertyGroup />);
  const linkElement = screen.getByText(/Property Group/i);
  expect(linkElement).toBeInTheDocument();
});
