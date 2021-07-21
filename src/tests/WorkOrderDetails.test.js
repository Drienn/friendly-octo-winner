import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { useLocation } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { WorkOrderDetails } from '../components/WorkOrders';
import { useStore } from '../hooks';
import { WorkOrderDetailsWrapper } from '../styles/workOrders';

const mockSetState = jest.fn();
const mockUpdateData = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(initial => [initial, mockSetState])
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({ state: { workOrderDetails: { id: 1, location: [{ name: 'booga palace' }] } } }))
}))

jest.mock('../hooks', () => ({
  ...jest.requireActual('../hooks'),
  useStore: jest.fn(() => ({ updateData: mockUpdateData }))
}))

const renderComp = (isShallow) => isShallow ? shallow(<WorkOrderDetails />) : render(<WorkOrderDetails />)

describe('WorkOrderDetails', () => {
  it('renders with locations', () => {
    renderComp();
    expect(screen.getByText('booga palace')).toBeInTheDocument();
  });
  it('onSubmit skips updateData when entering edit mode', () => {
    useState.mockImplementationOnce(() => [true, jest.fn()])
    const comp = renderComp(true);
    comp.find(WorkOrderDetailsWrapper).props().onSubmit({ preventDefault: () => null });
    expect(mockUpdateData).toHaveBeenCalledTimes(0);
  });
  it('onSubmit calls updateData when leaving edit mode', () => {
    const comp = renderComp(true);
    comp.find(WorkOrderDetailsWrapper).props().onSubmit({ preventDefault: () => null });
    expect(mockUpdateData).toHaveBeenCalledWith({ id: 1, priority: undefined, title: undefined, description: undefined });
  });
  it('renders WorkOrderNotFound', () => {
    useLocation.mockImplementationOnce(() => ({})); // * super important to go before the render
    const comp = renderComp(true);
    expect(comp.find('WorkOrderNotFound')).toHaveLength(1);
  });
});