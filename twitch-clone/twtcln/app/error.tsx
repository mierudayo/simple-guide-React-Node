"use client";
// import { StreamPlayerSkeleton } from "@/components/stream-player";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// const ErrorPage = () => {
//   return (
//     <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
//       <h1 className="text-4xl">404 💀</h1>

//       <Image
//         src="/my-honest-reaction-my.gif"
//         alt="Not Found GIF"
//         width={100}
//         height={100}
//       />

//       <p>Something Went wrong</p>
//       <Button variant="secondary" asChild>
//         <Link href="/">Go Back Home</Link>
//       </Button>
//     </div>
//   );
// };

// export default ErrorPage;

import { StreamPlayerSkeleton } from "@/components/stream-player";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <Image
        src="/my-honest-reaction-my.gif"
        alt="My Honest Reaction GIF"
        width={200}
        height={50}
      />

      <p>Something went Wrong💀</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
