import React, { FC } from 'react';
import styled from 'styled-components';

import botSrc from '../images/bot.png';

const Image = styled.img`
    animation: 0.3s ease 0s 1 normal forwards running Lmuha;
    border-radius: 50% 50% 0px;
    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
    height: 40px;
    min-width: 40px;
    padding: 3px;
    transform-origin: right bottom;
    margin-right: 0.4rem;
`;

export const BotImage: FC = () => {
    return (
        <Image src={botSrc} alt="bot" />
    )
}