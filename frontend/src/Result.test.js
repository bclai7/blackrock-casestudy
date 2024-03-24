import { render, screen, cleanup } from '@testing-library/react';
import Result from './Result';
import renderer from 'react-test-renderer';

test('renders Result component', () => {
  render(<Result results = { [] } validInput = {true} errorOccurred={false} />);
  const resultHeader = screen.getByTestId('resultHeader');
  const resultSection = screen.getByTestId('resultSection');
  const resultTable = screen.getByTestId('resultTable');
  expect(resultHeader).toBeInTheDocument();
  expect(resultSection).toBeInTheDocument();
  expect(resultTable).toBeInTheDocument();
});

test('invalid input', () => {
    render(<Result results = { [] } validInput = {false} errorOccurred={false} />);
    const invalidInput = screen.getByTestId('invalidInput');
    expect(invalidInput).toBeInTheDocument();
    expect(invalidInput).toHaveTextContent('Invalid Input');
    
});

test('error occurred', () => {
    render(<Result results = { [] } validInput = {true} errorOccurred={true} />);
    const errorOccurred = screen.getByTestId('errorOccurred');
    expect(errorOccurred).toBeInTheDocument();
    expect(errorOccurred).toHaveTextContent('An error has occurred');
    
});

test('successful result snapshot', () => {
    const snap = renderer.create(<Result results = { [] } validInput = {true} errorOccurred={false} />).toJSON();
    expect(snap).toMatchSnapshot();
});

test('invalid input result snapshot', () => {
    const snap = renderer.create(<Result results = { [] } validInput = {false} errorOccurred={false} />).toJSON();
    expect(snap).toMatchSnapshot();
});

test('error occureed result snapshot', () => {
    const snap = renderer.create(<Result results = { [] } validInput = {true} errorOccurred={true} />).toJSON();
    expect(snap).toMatchSnapshot();
});