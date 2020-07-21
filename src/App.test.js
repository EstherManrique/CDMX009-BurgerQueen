import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import WaiterRegister from './components/WaiterRegister';

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



