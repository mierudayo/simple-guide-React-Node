"use client";

import { UserIcon } from "lucide-react";
import {
  useParticipants,
  useRemoteParticipant,
} from "@livekit/components-react";
import { Skeleton } from "../ui/skeleton";
import { VerifiedMark } from "@/components/verified-mark";
import { UserAvatar, UserAvatarSkeleton } from "../user-avatar";
import { Actions, ActionsSkeleton } from "./actions";

interface HeaderProps {
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  imageUrl: string;
  isFollowing: boolean;
  name: string;
}

export const Header = ({
  hostName,
  hostIdentity,
  viewerIdentity,
  imageUrl,
  isFollowing,
  name,
}: HeaderProps) => {
  const participants = useParticipants();
  const participant = useRemoteParticipant(hostIdentity);

  const isLive = !!participant;
  const participantCount = participants.length - 1;

  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={isLive}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg font-semibold">{hostName}</h2>
            <VerifiedMark />
          </div>
        </div>
      </div>
    </div>
  );
};
