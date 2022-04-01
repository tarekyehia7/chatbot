export enum MessageDirection {
    Incoming = 'incoming',
    Outgoing = 'outgoing'
};

export type MessageContent = {
    message: string;
    direction: MessageDirection;
};

export type Chat = {
    messages: MessageContent[];
    helloThereAppeared: boolean;
    typingStatus: TypingStatus;
};

export enum TypingStatus {
    TypingOn = 'typingOn',
    TypingOff = 'typingOff'
};