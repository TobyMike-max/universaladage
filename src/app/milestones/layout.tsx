import "../globals.css";
import type { ReactNode } from "react";
import Head from "next/head";
import Footer from "@/app/footer";


export const metadata = {
  title: "Universaladage - Digital Branding & SEO",
  icons: "/favicon.ico",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="We build legacies that stand the test of time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <body>
        {/* <Navbar /> */}
        {children}
        <Footer color={'bg-[#333]'}/>
      </body>
    </html>
  );
}
