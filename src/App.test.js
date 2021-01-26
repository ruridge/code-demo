import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders playground', () => {
    render(<App />);
    const title = screen.getByRole('heading', { level: 1, name: 'Playground' });
    expect(title).toBeInTheDocument();
  });
});
