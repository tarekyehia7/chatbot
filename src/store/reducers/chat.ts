import { createSlice } from '@reduxjs/toolkit'
import { Chat, TypingStatus } from '../../types/Message';
// Slice

const initialState: Chat = { 
  messages: [],
  helloThereAppeared: false,
  typingStatus: TypingStatus.TypingOff
};

export const slice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    addMessage: (state, action) => {
        // @ts-ignore
        state.messages.push(action.payload);
    },
    typingStatus: (state, action) => {
      state.typingStatus = action.payload
    },
    helloThereAppeared: (state, action) => {
      state.helloThereAppeared = action.payload
    }
  },
});

export default slice.reducer