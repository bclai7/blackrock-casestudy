import { render, screen, cleanup } from '@testing-library/react';
import TopBar from './TopBar';
import renderer from 'react-test-renderer';

test('renders TopBar component', () => {
  render(<TopBar />);
  const topBarElement = screen.getByTestId('topBar');
  expect(topBarElement).toBeInTheDocument();
  expect(topBarElement).toHaveTextContent('AI Labs | Full Stack Case Study');
  const runButton = screen.getByTestId('runButton');
  expect(runButton).toBeInTheDocument();
  expect(runButton).toHaveTextContent('Run');
});

test('topBar snapshot', () => {
    const snap = renderer.create(<TopBar />).toJSON();
    expect(snap).toMatchSnapshot();
});
