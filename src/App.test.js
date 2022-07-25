import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app', async () => {
    // make sure we're on the people page
    const route = `/people`;
    window.history.pushState({}, '', route);
    // render the app
    render(<App />);
    screen.debug();
  });
});
