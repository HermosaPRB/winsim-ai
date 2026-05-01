import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WinSim AI",
  description: "AI competition judge simulator"
};

import { FloatingChat } from "@/components/floating-chat";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
