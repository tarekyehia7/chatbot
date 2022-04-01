import React from 'react';
import { render, cleanup } from '@testing-library/react'; 

import { BotImage } from './BotImage';

beforeEach(cleanup);

test('should contain correct alt text', async () => {
    const { getByAltText } = render(<BotImage />);
    expect(getByAltText('bot')).toBeDefined();
});

test('should contain correct image src', async () => {
    const { getByAltText } = render(<BotImage />);
    const image = getByAltText('bot') as HTMLImageElement;
    expect(image.src).toBe('http://localhost/bot.png');
});