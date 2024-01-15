"use client";

import { useParticipants } from "@livekit/components-react";
import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";

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
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange = (newValue: string) => {
    setValue(value);
  };

  if (isHidden) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-muted-foreground">Community Is Disabled</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Input
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Community"
        className="border-white/10"
      />
      <ScrollArea className="gap-y-2 mt-4">
        <p className="text-center text-sm text-muted-foreground hidden last:block">
          No Results
        </p>
        {participants.map((participant) => (
          <CommunityItem
            key={participants.identity}
            hostName={hostName}
            viewerName={viewerName}
            participantName={participants.name}
            participantIdentity={participants.identity}
          />
        ))}
      </ScrollArea>
    </div>
  );
};
