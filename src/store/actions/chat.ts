import { MessageContent, TypingStatus } from '../../types/Message';
import { slice } from '../reducers/chat';
import { AppDispatch } from '../store';

const { addMessage, typingStatus, helloThereAppeared } = slice.actions;

export const addNewMessage = ({ message, direction }: MessageContent) => async (dispatch: AppDispatch) => {
  try {
    dispatch(addMessage({ message, direction }));
  } catch (e) {
    return console.error(e);
  }
};

export const AddTypingStatus = (status: TypingStatus) => async (dispatch: AppDispatch) => {
  try {
    dispatch(typingStatus(status));
  } catch (e) {
    return console.error(e);
  }
};

export const helloThereFound = (appeared: boolean) => async (dispatch: AppDispatch) => {
  try {
    dispatch(helloThereAppeared(appeared));
  } catch (e) {
    return console.error(e);
  }
}