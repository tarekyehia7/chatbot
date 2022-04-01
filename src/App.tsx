import { History } from "./components/History";
import { Message } from "./components/Message";
import { Input } from "./components/Input";

/**
 * 1. Implement state management.
 * Submitting a message should let it appear in the message history as an "outgoing message"
 * You can use either react-redux or builtins from react to solve this
 *
 * import { createStore } from "@reduxjs/toolkit";
 * import { Provider } from "react-redux";
 *
 * OR
 *
 * import { useReducer, useContext, createContext } from 'react';
 */

/**
 * 2. Connect with backend.
 * Use an instance of the SocketClient from the @cognigy/socket-client package to send and receive messages to the bot.
 * https://www.npmjs.com/package/@cognigy/socket-client
 * Use URL and Token as described in the challenge
 *
 * Bot outputs should appear in the message history as "incoming"
 *
 * The bot will greet "Hello There" on your first message and then reply with a quote of the text you sent to it.
 * Hint: the "Hello There" response should not appear more than _once_ in your conversation history.
 *
 * import { SocketClient } from "@cognigy/socket-client";
 * const { ENDPOINT_BASE_URL, ENDPOINT_URL_TOKEN } = process.env;
 */

/**
 * 3. Auto-Scroll History
 * When the message history is "full", it should automatically scroll to the bottom when new content arrives.
 */

export default function App() {
  return (
    <div
      style={{
        width: 300,
        height: 400,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <History>
        {/* TODO: replace with dynamic rendering */}
        <Message direction="incoming">hello user</Message>
        <Message direction="outgoing">hello bot</Message>
      </History>

      {/* TODO: send message on submit */}
      <Input />
    </div>
  );
}
