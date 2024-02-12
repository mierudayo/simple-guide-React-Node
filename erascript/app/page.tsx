import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <h1>Sign in</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
