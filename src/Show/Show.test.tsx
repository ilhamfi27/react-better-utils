import '@testing-library/jest-dom';

import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Show } from './Show';

describe('<Show /> Component', () => {
  test('renders the "When" component if condition is true', () => {
    render(
      <Show>
        <Show.When isTrue={true}>Condition is true</Show.When>
        <Show.Else>Condition is false</Show.Else>
      </Show>
    );
    expect(screen.getByText('Condition is true')).toBeInTheDocument();
  });

  test('renders the "Else" component if no condition is true', () => {
    render(
      <Show>
        <Show.When isTrue={false}>Condition is true</Show.When>
        <Show.Else>Condition is false</Show.Else>
      </Show>
    );
    expect(screen.getByText('Condition is false')).toBeInTheDocument();
  });

  test('does not allow multiple <Show.Else> components', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    render(
      <Show>
        <Show.When isTrue={false}>Condition is true</Show.When>
        <Show.Else>Condition is false</Show.Else>
        <Show.Else>Another false</Show.Else>
      </Show>
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Only one <Show.Else> is allowed'
    );
    consoleErrorSpy.mockRestore();
  });
});
