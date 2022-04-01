import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const dotsAnimation = keyframes`
    0%   { content: ''; }
    25%  { content: '.'; }
    50%  { content: '..'; }
    75%  { content: '...'; }
    100% { content: ''; }
`;

const DotsStyled = styled.button`
    font-size: 20px;
    background: transparent;
    border: none;

    &:after {
        display: inline-block;
        animation: ${dotsAnimation} steps(1,end) 1s infinite;
        content: '';
    }
`;

const ThreeDots: FC = () => {
    return (
        <DotsStyled />
    );
};

export default React.memo(ThreeDots);