import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';

describe('Header', () => {
  it('should render in the document', () => {
    const { queryByTestId } = render(<Header />);

    expect(queryByTestId('header')).toBeInTheDocument();
  });
});
