"use client";

import { useSidebar } from "@/store/user-sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
interface ContainerProps {
  children: React.ReactNode;
}

// hi heleo
// hi heleo
// hi heleo
// hi heleo
// hi heleo
// hi heleo
// hi heleo
// hi heleo
// hi heleo
export const Container = ({ children }: ContainerProps) => {
  const matches = useMediaQuery("(max-width:1024px)");
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
    //
  }, [matches, onCollapse, onExpand]);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
};
