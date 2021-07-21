import React from 'react';
import { shallow } from 'enzyme';
import EditableInput from '../components/EditableInput';
import { Select, Input } from '@material-ui/core';
import { priorityOptions } from '../constants';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(fn => fn()),
  useState: jest.fn(initial => [initial, mockSetState])
}))

const mockOnChange = jest.fn();
const defaultProps = {
  editMode: true, value: '', type: undefined, onChange: mockOnChange, options: undefined, label: 'Title:', name: 'title',
};

const renderComp = (props) => shallow(<EditableInput {...defaultProps} {...props} />)

describe('EditableInput', () => {
  it('default onChange returns null', () => {
    const comp = renderComp({ onChange: undefined });
    comp.find(Input).props().onChange({ target: { value: 'HIGH' } });
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });
  it('renders Input by default and onChange functions', () => {
    const comp = renderComp();
    comp.find(Input).props().onChange({ target: { value: 'woohoo' } });
    expect(mockOnChange).toHaveBeenCalledWith({ title: 'woohoo' });
  });
  it('renders Select and onChange functions', () => {
    const comp = renderComp({ type: 'select', options: priorityOptions, name: 'priority' });
    comp.find(Select).props().onChange({ target: { value: 'HIGH' } });
    expect(mockOnChange).toHaveBeenCalledWith({ priority: 'HIGH' });
  });
});