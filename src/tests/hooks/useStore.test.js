import { useContext } from 'react';
import { useStore, StoreContext } from '../../hooks';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}))

describe('useStore', () => {
  it('creates a storeContext', () => {
    useStore();
    expect(useContext).toHaveBeenCalledWith(StoreContext);
  })
  it('default export should return a function', () => {
    expect(useStore).toBeInstanceOf(Function);
  })
})