import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import BackgLogin from './components/BackgLogin';

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/waiter/i);
  expect(linkElement).toBeInTheDocument();
}); */

/* test('renders learn react link', () => {
  const { getByRole } = render(<App />);
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
}); */

it('should take a snapshot', () => {
  const { asFragment } = render(<App />)  
  expect(asFragment(<App />)).toMatchSnapshot()
 });

  test('renders Mesero', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mesero/i);
  expect(linkElement).toBeInTheDocument();
}); 


test('renders Cocina', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Cocina/i);
  expect(linkElement).toBeInTheDocument();
}); 


