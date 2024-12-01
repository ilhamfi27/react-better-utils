import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Each } from './Each';

describe('Each component', () => {
  it('renders correctly with given props', () => {
    const items = ['item1', 'item2', 'item3'];

    render(
      <Each
        render={({ item, index }: { item: string; index: number }) => (
          <div key={index}>{item}</div>
        )}
        of={items}
      />
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders an empty array without errors', () => {
    const items: string[] = [];

    render(
      <Each
        render={({ item, index }: { item: string; index: number }) => (
          <div key={index}>{item}</div>
        )}
        of={items}
      />
    );

    expect(screen.queryByText(/item/)).toBeNull();
  });
});
