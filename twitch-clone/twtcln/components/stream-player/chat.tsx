"use client";

import { useChatSidebar } from "@/store/use-chat-sidebar";
import {
  ConnectionState,
  useConnectionState,
  useRemoteParticipant,
} from "@livekit/components-react";
import { useMediaQuery } from "usehooks-ts";

interface ChatProps {
  hostName: string;
  viewerName: string;
  hostIdentity: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
}

export const Chat = ({
  hostName,
  viewerName,
  hostIdentity,
  isFollowing,
  isChatDelayed,
  isChatEnabled,
  isChatFollowersOnly,
}: ChatProps) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const { variant, onExpand } = useChatSidebar((state) => state);
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);

  const isOnline = participant && connectionState === ConnectionState.connected;

  return (
    <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
      Chat
    </div>
  );
};
