import React from 'react';
import { shallow } from 'enzyme';
import EditButton from '../components/EditButton';
import { Button } from '@material-ui/core';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

const mockSetEditMode = jest.fn();
const defaultProps = {
  editMode: false,
  setEditMode: mockSetEditMode,
};

const renderComp = (props) => shallow(<EditButton {...defaultProps} {...props} />)

describe('EditButton', () => {
  it('renders when editMode is false', () => {
    const comp = renderComp();
    expect(comp).toHaveLength(1);
  });
  it('renders when editMode is true and fires onClick with false', () => {
    const comp = renderComp({ editMode: true });
    comp.find(Button).props().onClick();
    expect(mockSetEditMode).toHaveBeenCalledWith(false);
  });
});