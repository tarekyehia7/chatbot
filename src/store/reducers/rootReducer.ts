import { combineReducers } from 'redux';
import { Chat } from '../../types/Message';

import chat from './chat';

export interface ReducerState {
    chat: Chat
}

const rootReducer = combineReducers({
    chat,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;