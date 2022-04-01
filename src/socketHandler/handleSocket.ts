import { SocketClient } from '@cognigy/socket-client';

import { addNewMessage, AddTypingStatus, helloThereFound } from '../store/actions/chat';
import { AppDispatch } from '../store/store';
import { Chat, MessageDirection, TypingStatus } from '../types/Message';
import { timeout } from '../helpers/timeout';

const apiUrl = process.env.REACT_APP_ENDPOINT_BASE_URL ?? null;
const apiToken = process.env.REACT_APP_ENDPOINT_URL_TOKEN ?? null;

export const handleSocket = async(dispatch: AppDispatch, chat: Chat) => {
    if (!apiUrl || !apiToken) return

    // create a client instance with a socket url and an url token
    const client = new SocketClient(apiUrl, apiToken, {
        // if you use node, internet explorer or safari, you need to enforce websockets
        forceWebsockets: true,
    });

    client.on('output', async (output) => {
        if (output.text === 'Hello there!' && chat.helloThereAppeared) return;
        
        await timeout(1000);
        await dispatch(addNewMessage({ message: output.text, direction: MessageDirection.Incoming }));
        if (output.text === 'Hello there!' && !chat.helloThereAppeared) {
            await dispatch(helloThereFound(true));
        }
    });

    client.on('typingStatus', async ({ status }) => {
        if (status === TypingStatus.TypingOff) {
            await timeout(1000);
        }
        await dispatch(AddTypingStatus(status));
    });

    // establish a socket connection (returns a promise)
    await client.connect();

    return client;
}