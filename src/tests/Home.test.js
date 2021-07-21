import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

const renderComp = () => render(<Home />)

describe('Home', () => {
  it('should succesfully', () => {
    renderComp();
    expect(screen.getByText('UpKeep Candidate UI Project')).toBeInTheDocument();
  });
});