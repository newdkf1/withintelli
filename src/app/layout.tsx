import type { Metadata } from "next";

import "./globals.css";

import { geist, geistMono } from "@/lib/Font";

export const metadata: Metadata = {
  title: {
    default: "Intelli: Modernizing Business Operations",
    template: "%s"
  },

  description: 'Intelli helps businesses, enterprises, and institutions modernize business operations, strengthen digital foundations, and drive sustainable growth. ' + 
                'We partner with organizations across Healthcare, LegalTech, Financial Services, Insurance, Manufacturing, Logistics & Supply Chain, Retail, ' + 
                'E-Commerce, Real Estate, PE/VC, Media, and other sectors. ' + 
                'Intelli partners with organizations on enterprise business applications, technology management, business process management, business process outsourcing. ' +
                'Our engagements typically include both build and managed services, aligned to clients’ operational, governance, and growth mandates. ' + 
                'To explore how Intelli can support your digital transformation, business process modernization priorities, start a conversation with our team. ' + 
                'You can contact us at support@withintelli.com',
            
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
