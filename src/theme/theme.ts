import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        lightGrey: '#afaeae',
        darkGrey: '#383737',
        lightBlue: '#276f95'
    },
};

export type Theme = typeof theme;
export const styled = baseStyled;