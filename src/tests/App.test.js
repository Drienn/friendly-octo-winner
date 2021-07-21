import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

const renderComp = () => shallow(<App />)

describe('App', () => {
  it('renders succesfully', () => {
    const comp = renderComp();
    expect(comp.find('WorkOrderStore')).toHaveLength(1);
  });
});