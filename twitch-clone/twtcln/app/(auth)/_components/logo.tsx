import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4")}>
      <div className="rounded-full p-1">
        <Image src="/startLogo.png" alt="GameHub" height="200" width="200" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Twitch Clone</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Play</p>
      </div>
    </div>
  );
};
