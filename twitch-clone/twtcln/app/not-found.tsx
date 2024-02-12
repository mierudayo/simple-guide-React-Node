import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404 💀</h1>
      <Image
        src="/laughing-cat.gif"
        alt="Not Found GIF"
        width={100}
        height={100}
      />
      <p>Bro Can&apos;t even write properly</p>
      <Button variant="secondary">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
