import { render, screen, cleanup } from '@testing-library/react';
import Input from './Input';
import renderer from 'react-test-renderer';

test('renders Input component', () => {
  const formData = {
    x: '',
    y: '',
    z: '',
    sigma: '',
    rho: '',
    beta: '',
    delta: '',
  };
  render(<Input formData={formData}/>);
  const inputElement = screen.getByTestId('userInput');
  const xElement = screen.getByTestId('x');
  const yElement = screen.getByTestId('y');
  const zElement = screen.getByTestId('z');
  const sigmaElement = screen.getByTestId('sigma');
  const rhoElement = screen.getByTestId('rho');
  const betaElement = screen.getByTestId('beta');
  const deltaElement = screen.getByTestId('delta');
  expect(inputElement).toBeInTheDocument();
  expect(xElement).toBeInTheDocument();
  expect(yElement).toBeInTheDocument();
  expect(zElement).toBeInTheDocument();
  expect(sigmaElement).toBeInTheDocument();
  expect(rhoElement).toBeInTheDocument();
  expect(betaElement).toBeInTheDocument();
  expect(deltaElement).toBeInTheDocument();
});

test('input snapshot', () => {
    const formData = {
        x: '',
        y: '',
        z: '',
        sigma: '',
        rho: '',
        beta: '',
        delta: '',
      };
    const snap = renderer.create(<Input formData={formData}/>).toJSON();
    expect(snap).toMatchSnapshot();
});
