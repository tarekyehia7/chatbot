import React, { useEffect, useState } from 'react'
import { SocketClient } from '@cognigy/socket-client';
import styled, { createGlobalStyle } from 'styled-components'

import { useAppDispatch, useAppSelector } from './hooks/redux';
import { MessageContent, MessageDirection, TypingStatus } from './types/Message';
import { History } from './components/History';
import { Message } from './components/Message';
import Input from './components/Input';
import { handleSocket } from './socketHandler/handleSocket';
import { addNewMessage } from './store/actions/chat';
import ThreeDots from './components/ThreeDots';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`

const Container = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    border: 1px solid #ebebeb;
    box-shadow: rgb(0 0 0 / 15%) 0px 12px 24px 0px;
`;

export default function App() {
    const dispatch = useAppDispatch()
    const chat = useAppSelector((state) => state.chat)
    const [clientSocket, setClientSocket] = useState<SocketClient>();
    const typingStatus = chat.typingStatus;
    const isBotTyping = typingStatus === TypingStatus.TypingOn
    
    useEffect(() => {
        async function fetchMyAPI() {
            const client = await handleSocket(dispatch, chat);
            setClientSocket(client);
        }
        fetchMyAPI()
    }, [setClientSocket])

    const onSubmitClicked = async (message: string) => {
        try {
            await dispatch(addNewMessage({ message, direction: MessageDirection.Outgoing }));
            if (clientSocket) {
                clientSocket.sendMessage(message);
            }
        } catch (err) {
            console.error('Failed to send the message: ', err);
        }
    }

    return (
      <div className="app">
        <GlobalStyle />
        <Container>
            <History>
                { 
                    chat.messages.map((message: MessageContent, idx: number) => 
                        <Message key={idx} direction={message.direction}>{message.message}</Message>
                    )
                }
                {isBotTyping && <ThreeDots />}
            </History>
            <Input onSubmit={onSubmitClicked}/>
        </Container>
      </div>
    )
}