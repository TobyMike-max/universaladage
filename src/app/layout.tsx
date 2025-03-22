import "./globals.css";
import type { ReactNode } from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";
// import Navbar from "@/components/Navbar";

const font = Poppins({
  subsets: ["latin"],
  weight: "400"
});

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Universaladage - Digital Branding & SEO</title>
        <meta name="description" content="We build legacies that stand the test of time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <body className={font.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
