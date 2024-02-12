import Image from "next/image";
import { SignIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <SignIn />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
