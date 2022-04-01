import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Message } from './Message';
import { theme } from '../theme/theme';
import { MessageDirection } from '../types/Message';

beforeEach(cleanup);

const renderComponent = (direction: MessageDirection) => {
    const { getByTestId, getByAltText } = render(
        <ThemeProvider theme={theme}>
            <Message direction={direction} />
        </ThemeProvider>
    )

    return {
        getByTestId,
        getByAltText
    }
}

test('Should render Incoming Message', () => {
    const { getByTestId } = renderComponent(MessageDirection.Incoming);
    const fullMessage = getByTestId('full-message');
    const computedStyle = window.getComputedStyle(fullMessage);
    expect(computedStyle.alignSelf).toBe('flex-start')
});

test('Should render Outgoing Message', () => {
    const { getByTestId } = renderComponent(MessageDirection.Outgoing);
    const fullMessage = getByTestId('full-message');
    const computedStyle = window.getComputedStyle(fullMessage);
    expect(computedStyle.alignSelf).toBe('flex-end')
});

test('Should  render botImage for Incoming Message', () => {
    const { getByAltText } = renderComponent(MessageDirection.Incoming);
    
    expect(getByAltText('bot')).toBeDefined();
});

test('Should not render botImage for Outgoing Message', () => {
    const { getByAltText } = renderComponent(MessageDirection.Outgoing);
    
    expect(() => getByAltText('bot')).toThrow('Unable to find an element');
});
