import { reducer } from '../../hooks';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useReducer: jest.fn((fn, initial) => [initial, jest.fn()]),
}));

describe('useFormState', () => {
  it('reducer should function as intended', () => {
    const prevState = { one: 'one', two: 'two' };
    const newState = { three: 'three', four: 'four' };
    const stateOne = reducer(prevState, newState);
    expect(stateOne).toEqual({ one: 'one', two: 'two', three: 'three', four: 'four', });
    const stateTwo = reducer(prevState);
    expect(stateTwo).toEqual({ one: 'one', two: 'two' });
  });
});
