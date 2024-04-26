import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from '@clerk/nextjs';

import { Inter } from "next/font/google";
import TopNav from "./_components/topnav";
//import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
//import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "T3 File Gallery",
  description: "Gallery using T3 stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

/* function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>

      <div>Sign In</div>
    </nav>
  );
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
