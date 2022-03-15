<<<<<<< HEAD
import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home Screen/i);
=======
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
>>>>>>> edd93532ce4b3f42e987032ab5978bd9fd333daf
  expect(linkElement).toBeInTheDocument();
});
