import { Metadata } from "next";
import { ReactNode } from "react";

import Head from "next/head";
import Script from "next/script";

import "./global.scss";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "RyxnDmello",
  description: "Portfolio and Freelancing",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <Script type="text/javascript" src="/static/home.js" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
