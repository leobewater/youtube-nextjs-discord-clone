import React from "react";

interface ChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}
export const ChatWelcome = ({ type, name }: ChatWelcomeProps) => {
  return <div>ChatWelcome</div>;
};
