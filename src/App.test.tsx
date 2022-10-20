import { describe, test } from 'vitest'
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => { 
  //should render test
  // 1. it.todo('should render');
  test('should render', () => {
    render(<App />);
  });

  //should have title "Mi DUI es valido?"
  // 2. it.todo('should have title "Mi DUI es valido?"');
  test('should have title "Mi DUI es valido?"', () => {
    render(<App />);
    const title = screen.getByText('Mi DUI es valido?');
    expect(title).toBeInTheDocument();
  });

  //should have an input text
  // 3. it.todo('should have an input text');
  test('should have an input text', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  //should have a button with text "Validar"
  // it.todo('should have a button with text "Validar"');
  test('should have a button with text "Validar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Validar');
  });


  /* Lo que demas que se les ocurra que puedan probar */

  //asi estoy bien :)
  
})
