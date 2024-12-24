import type { Metadata } from "next";

import MainLayout from "@/app/_components/Layout";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "Dynamic Policy",
  description: "An application that displays and interacts with policy data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
