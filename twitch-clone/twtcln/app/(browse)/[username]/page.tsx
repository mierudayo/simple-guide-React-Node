import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";
import { isFollowingUser } from "@/lib/follow-service";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }

  //
  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {user.username}</p>
      <p>user Id: {user.id}</p>
      <p>is following: {`${isFollowing}`}</p>
      <p>is Blocked by this User: {`${isBlocked}`}</p>
      <Actions userId={user.id} isFollowing={isFollowing} />
      <p></p>
    </div>
  );
};

export default UserPage;
