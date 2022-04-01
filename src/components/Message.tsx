import React, { FC } from "react";

type MessageDirection = "incoming" | "outgoing";

interface MessageProps {
  direction: MessageDirection;
}

export const Message: FC<MessageProps> = (props) => {
  const { direction } = props;

  return (
    <div
      style={{
        alignSelf: direction === "incoming" ? "flex-start" : "flex-end",
        border: "1px solid black",
        padding: 5,
        borderRadius: 5
      }}
    >
      {props.children}
    </div>
  );
};
