import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "%s - DotaJet",
    default: "DotaJet",
  },
  description:
    "DotaJet",
};

import { DefaultAppShell } from "@/components/appshell";
import MantineCustomProvider from "@/app/mantine-custom-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-blue-300 selection:text-blue-900"
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NextTopLoader color="#0080FF" showSpinner={false} />

        <MantineCustomProvider>
          <Notifications position="top-right" zIndex={1000} autoClose={10000} />

          <DefaultAppShell>{children}</DefaultAppShell>
        </MantineCustomProvider>
      </body>
    </html>
  );
}
