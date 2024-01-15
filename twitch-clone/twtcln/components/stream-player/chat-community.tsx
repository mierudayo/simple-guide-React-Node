"use client";

import { useParticipants } from "@livekit/components-react";

interface ChatCommunityProps {
  hostName: string;
  viewerName: string;
  isHidden: boolean;
}

export const ChatCommunity = ({
  hostName,
  viewerName,
  isHidden,
}: ChatCommunityProps) => {
  const participants = useParticipants();

  return <div></div>;
};
