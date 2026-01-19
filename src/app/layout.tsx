import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Auto-Draft",
  description: "Sales-Driven Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn("antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
