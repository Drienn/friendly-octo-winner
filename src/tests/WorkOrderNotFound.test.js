import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { WorkOrderNotFound } from '../components/WorkOrders';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({ id: 'booga dooga' })),
}))

const renderComp = () => render(<Router><WorkOrderNotFound /></Router>); // * Router needed because of the <Link />

describe('WorkOrderNotFound', () => {
  it('should render and display invalid id', () => {
    renderComp();
    expect(screen.getByText('booga dooga')).toBeInTheDocument();
  });
});