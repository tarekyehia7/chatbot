import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Input from './Input';
import { theme } from '../theme/theme';

beforeEach(cleanup);

const renderComponent = (onSubmit: () => void) => {
    const { getByPlaceholderText, getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Input onSubmit={onSubmit}/>
        </ThemeProvider>
    )

    return {
        getByPlaceholderText,
        getByTestId
    }
}

test('Should change the value of the input correctly', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText } = renderComponent(onSubmit);
    const input = getByPlaceholderText('type here') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'Hello'}})
    expect(input.value).toBe('Hello')
});

test("form should be submitted correctly", () => {
    const onSubmit = jest.fn();
    const { getByTestId, getByPlaceholderText } = renderComponent(onSubmit);
    const input = getByPlaceholderText('type here') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'Hello'}})
    const form = getByTestId('form-submit') as HTMLFormElement;
  
    fireEvent.submit(form);
  
    expect(onSubmit).toHaveBeenCalled();
});