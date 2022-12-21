import { render } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NotFound', () => {
  it('should have "Page not found" in the document', () => {
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>,
    );
    expect(getByText('Page not found')).toBeInTheDocument();
  });
});
