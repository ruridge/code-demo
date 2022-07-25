import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all the people page information', async () => {
    const route = `/people`
    window.history.pushState({}, '', route);

    render(<App />);
  
    // 🐨 use waitFor to wait for the queryCache to stop fetching and the loading
    // indicators to go away
    // 📜 https://testing-library.com/docs/dom-testing-library/api-async#waitfor
    // 💰 if (queryCache.isFetching or there are loading indicators) then throw an error...
    await waitFor(() => {
      expect(queryCache.isFetching).toBe(0)
    })
    await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))
  
    // 🐨 assert the book's info is in the document
    expect(screen.getByRole('heading', {name: book.title})).toBeInTheDocument()
    expect(screen.getByText(book.author)).toBeInTheDocument()
    expect(screen.getByText(book.publisher)).toBeInTheDocument()
    expect(screen.getByText(book.synopsis)).toBeInTheDocument()
    expect(screen.getByRole('img', {name: /book cover/i})).toHaveAttribute(
      'src',
      book.coverImageUrl,
    )
  })
