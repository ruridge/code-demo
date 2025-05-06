import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders', () => {
    render(<App />);
    const title = screen.getByText('People');
    expect(title).toBeInTheDocument();
  });
});
