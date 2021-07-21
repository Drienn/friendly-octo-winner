import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  StrictMode: ({ children }) => <div>{children}</div>
}));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.js');
    expect(ReactDOM.render).toHaveBeenCalledWith(<React.StrictMode><App /></React.StrictMode>, div);
  });
});