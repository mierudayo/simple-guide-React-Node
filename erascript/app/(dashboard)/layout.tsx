"use client";

import { useOrganization } from "@clerk/nextjs";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardPage = ({ children }: DashboardLayoutProps) => {
  const { organization } = useOrganization();

  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};
