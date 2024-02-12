"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
      <Image
        src="/my-honest-reaction-my.gif"
        alt="My Honest Reaction GIF"
        width={200}
        height={50}
      />
      <p>Oops! Something went wrong. 💀</p>
      <Button variant="secondary">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
