import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SideNav from '../components/SideNav';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

const renderComp = () => render(<Router><SideNav /></Router>)

describe('SideNav', () => {
  it('should render succesfully', () => {
    renderComp();
    expect(screen.getByText('Work Orders')).toBeInTheDocument();
  });
});