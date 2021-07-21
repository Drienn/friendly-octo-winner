import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { WorkOrderStore } from '../components/WorkOrders';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

describe('WorkOrderStore', () => {
  const renderComp = () => shallow(<WorkOrderStore />)
  it('updateData works as intended', () => {
    useState.mockImplementationOnce(() => [false, jest.fn()])
    useState.mockImplementationOnce(() => [[{ id: 1 }, { id: 2 }, { id: 3 }], mockSetState])
    const comp = renderComp();

    const { value } = comp.find('ContextProvider').props();
    value.updateData({ id: 2, title: 'a fancy title', description: 'a fancy description', priority: 'HIGH' })
    expect(mockSetState).toHaveBeenCalledWith([{ id: 1 }, { id: 2, title: 'a fancy title', description: 'a fancy description', priority: 'HIGH' }, { id: 3 }]);
  });
});