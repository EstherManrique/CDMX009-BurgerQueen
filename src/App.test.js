import React from 'react';
import { render, getAllByText } from '@testing-library/react';
import App from './App';
import RestDay from './components/RestDay'

import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';

/* test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/waiter/i);
  expect(linkElement).toBeInTheDocument();
}); */

/* test('renders learn react link', () => {
  const { getByRole } = render(<App />);
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
}); */

describe('Aplicaicón', () => {
  test('Representa la App de BQ', () => {
    render( < App /> );
  });
});

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



