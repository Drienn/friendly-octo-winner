import React from 'react';
import { render, screen } from '@testing-library/react';
import { WorkOrders } from '../components/WorkOrders';
import { useStore } from '../hooks';

jest.mock('../hooks', () => ({
  ...jest.requireActual('../hooks'),
  useStore: jest.fn(() => ({ data: [{ id: 1, status: 'OPEN' }], dataFetched: true })),
}))

const renderComp = () => render(<WorkOrders />);

describe('WorkOrders', () => {
  it('should render with workOrders', () => {
    renderComp();
    expect(screen.getByText('Work Orders')).toBeInTheDocument();
  });
  it('should render loading', () => {
    useStore.mockImplementationOnce(() => ({ dataFetched: false }))
    renderComp();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});