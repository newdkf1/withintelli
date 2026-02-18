import type { Metadata } from "next";

import "../globals.css";

import { geist, geistMono } from "@/lib/Font";

import { IntelliDesc } from "@/lib/Consts";

export const metadata: Metadata = {
  title: {
    default: IntelliDesc["ai-engg-title"],
    template: "%s"
  },
    
  description: IntelliDesc["ai-engg-desc"],
            
  twitter: {
    card: "summary_large_image"
  },


}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className}`} >
        {children}
      </body>

    </html>
  );
}
