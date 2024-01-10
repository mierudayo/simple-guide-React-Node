"use client";

import { Stream, User } from "@prisma/client";

interface StreamPlayerProps {
  user: string & { stream: Stream | null };
  stream: Stream;
  isFollowing: boolean;
}

export const StreamPlayer = ({
  // extracting
  user,
  stream,
  isFollowing,
}: StreamPlayerProps) => {
  return <div>Stream Player</div>;
};
