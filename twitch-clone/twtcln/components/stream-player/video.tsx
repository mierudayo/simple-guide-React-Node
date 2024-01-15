"use client";

import { ConnectionState, Track } from "livekit-client";
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react";
import { OfflineVideo } from "./offline-video";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingVideo } from "./loading-video";
import { LiveVideo } from "./live-video";

interface VideoProps {
  hostName: string;
  hostIdentity: string;
}

export const Video = ({ hostName, hostIdentity }: VideoProps) => {
  //
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostIdentity);
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity);
  //
  let content;
  //
  if (!participant && connectionState === ConnectionState.Connected) {
    content = (
      <p>
        <OfflineVideo username={hostName} />
      </p>
    );
  } else if (!participant || tracks.length === 0) {
    content = (
      <p>
        <LoadingVideo label={connectionState} />
      </p>
    );
  } else {
    content = <LiveVideo participant={participant} />;
  }
  //
  //
  // /
  return <div className="aspect-video border-b group relative">{content}</div>;
};

export const VideoSkeleton = () => {
  return (
    <div className="aspect-video border-x border-background">
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
};
