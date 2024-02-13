import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EraScript",
  description: "For the developer who want to make docs and upload their work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
