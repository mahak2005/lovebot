import type React from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-purple-800 to-pink-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
