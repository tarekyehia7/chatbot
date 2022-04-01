import React, { FC } from 'react';
import styled from 'styled-components';

import { BotImage } from './BotImage';
import { MessageDirection } from '../types/Message';

const MessageStyled = styled.div<{ isIncomingMessage: boolean }>`
    padding: 5px;
    animation: 0.3s ease 0s 1 normal forwards running Lmuha;
    background: ${({ isIncomingMessage, theme }) => isIncomingMessage ? theme.colors.lightGrey : theme.colors.darkGrey};
    border-radius: 18px 18px 18px 0px;
    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
    color: ${({ isIncomingMessage, theme }) => isIncomingMessage ? theme.colors.black : theme.colors.white};
    display: inline-block;
    font-size: 14px;
    max-width: 73%;
    overflow: hidden;
    position: relative;
    padding: 12px;
    transform-origin: left bottom;
`

const FullMessageStyled =  styled.div<{ isIncomingMessage: boolean }>`
    display: flex;
    flex-direction: row;
    align-self: ${({ isIncomingMessage }) => isIncomingMessage ? `flex-start` : `flex-end`};
    align-items: flex-end;
    margin-bottom: 0.7rem;
`;

interface MessageProps {
  direction: MessageDirection;
}

export const Message: FC<MessageProps> = (props) => {
    const { direction } = props;
    const isIncomingMessage = direction === MessageDirection.Incoming;

    return (
       <FullMessageStyled data-testid="full-message" isIncomingMessage={isIncomingMessage}>
            {isIncomingMessage && 
                <BotImage />
            }
            <MessageStyled isIncomingMessage={isIncomingMessage}>   
                {props.children}
            </MessageStyled>
        </FullMessageStyled>
    );
};
