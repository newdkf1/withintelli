import type { Metadata } from "next";

import "./globals.css";

import { geist, geistMono } from "@/lib/Font";

import { IntelliDesc } from "@/lib/Consts";

export const metadata: Metadata = {
  title: {
    default: IntelliDesc["main-title"],
    template: "%s"
  },

  description: IntelliDesc["main-desc"],
            
  twitter: {
    card: "summary_large_image"
  },

  icons: {
    icon: [
      { url: 'https://www.withintelli.com/favicon.ico' },
      { url: 'https://www.withintelli.com/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.withintelli.com/apple-touch-icon.png' },
    ],
  }
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
