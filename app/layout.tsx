import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Page from "@/app/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ANSWERS",
  description: "Get answwers of your deepest questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mascot.png" type="image/png" />
      </head>
      <body>
        <Page/>
      </body>
    </html>
  );
}
