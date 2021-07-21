import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { WorkOrder } from '../components/WorkOrders';
import { WorkOrdersRow } from '../styles/workOrders';

const mockPush = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useHistory: () => ({
    push: mockPush
  })
}))

describe('WorkOrder', () => {
  const mockWorkOrder = {
    id: 1,
    dueDate: new Date(2021, 0, 1),
    number: 0,
    status: 'OPEN',
    title: 'test title',
    priority: 'HIGH',
    updatedAt: new Date(2021, 0, 2),
    createdAt: new Date(2021, 0, 3),
    location: [{ name: 'booga place' }]
  }

  const renderComp = (isShallow) => isShallow ? shallow(<WorkOrder workOrder={mockWorkOrder} />) : render(<table><tbody><WorkOrder workOrder={mockWorkOrder} /></tbody></table>)
  it('should render due date', () => {
    renderComp();
    expect(screen.getByText('01/01/21')).toBeInTheDocument();
  });

  it('should render work order number', () => {
    renderComp()
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should render status', () => {
    renderComp()
    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  it('should render title', () => {
    renderComp()
    expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
  });

  it('should render priority', () => {
    renderComp()
    expect(screen.getByText('HIGH')).toBeInTheDocument();
  });

  it('should render updatedAt', () => {
    renderComp()
    expect(screen.getByText('01/02/21')).toBeInTheDocument();
  });

  it('should render priority', () => {
    renderComp()
    expect(screen.getByText('01/03/21')).toBeInTheDocument();
  });

  it('WorkOrdersRow onClick', () => {
    const comp = renderComp(true);
    comp.find(WorkOrdersRow).props().onClick()
    expect(mockPush).toHaveBeenCalledWith({ pathname: '/workOrders/1', state: { workOrderDetails: mockWorkOrder } })
  })
});