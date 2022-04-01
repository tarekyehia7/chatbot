import React from 'react';
import { render, cleanup } from '@testing-library/react'; 
import { ThemeProvider } from 'styled-components';

import Button from './Button';
import { theme } from '../theme/theme';

beforeEach(cleanup);

const renderComponent = () => {
    const { getByText, getByTestId } = render(
        <ThemeProvider theme={theme}>
            <Button />
        </ThemeProvider>
    )

    return {
        getByText,
        getByTestId
    }
}

test('should contain correct text', async () => {
    const { getByText } = renderComponent();

    expect(getByText('Submit')).toBeDefined();
});

test('should contain correct color', async () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('submit-button') as HTMLButtonElement;
    const computedStyle = window.getComputedStyle(button);
    expect(computedStyle.color).toBe('rgb(175, 174, 174)');
});

test('should have bold font', async () => {
    const { getByTestId } = renderComponent();
    const button = getByTestId('submit-button') as HTMLButtonElement;
    const computedStyle = window.getComputedStyle(button);
    expect(computedStyle.fontWeight).toBe('bold');
});