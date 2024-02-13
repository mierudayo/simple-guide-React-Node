import Image from "next/image";
import { SignIn, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-8">
        <Image src="/e.svg" alt="Logo" width={100} height={100} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Welcome to EraScript</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sign in to access exclusive features and content.
      </p>
      <UserButton />
      <div className="flex space-x-4">
        <Button size="sm">
          <SignInButton />
        </Button>
        {/* <Button size="sm">
          <SignOutButton />
        </Button> */}
      </div>
    </div>
  );
}
