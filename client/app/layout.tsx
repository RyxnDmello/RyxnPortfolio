import { Metadata } from "next";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
