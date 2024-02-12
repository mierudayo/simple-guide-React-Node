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
        <Image src="/blbg.svg" alt="erascript" height={200} width={200} />
      </div>
    </div>
  );
};
