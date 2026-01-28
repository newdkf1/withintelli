import type { Metadata } from "next";

import "../../../globals.css";

import { geist, geistMono } from "@/lib/Font";

export const metadata: Metadata = {
  title: {
    default: "Build Your Enterprise AI Agent with Intelli",
    template: "%s"
  },
    
  description: 'Intelli is a global IT and business consulting firm that partners with organizations to modernize operations, strengthen digital foundations, and enable sustainable growth. ' + 
                'Intelli advises businesses, enterprises, and institutions across enterprise technology, digital platforms, large-scale transformation programs, managed growth and enterprise turnaround. ' + 
                'Our work spans technology and innovation management, digital transformation, business process optimization, data systems, and enterprise software services, helping organizations ' + 
                'operate more efficiently, scale with confidence, and adapt continuously in changing markets. ' + 
                'We take a problem-first, business-aligned approach, working closely with leadership teams to design, build, and manage mission-critical digital systems ' + 
                'that support both immediate operational needs and long-term strategic objectives. Our engagements typically include ' + 
                'both build and managed services, aligned to clients’ operational, governance, and growth mandates.' + 
                'Intelli operates as a vendor-agnostic partner, offering both build and managed services tailored to clients’ operational, governance, and long-term growth needs.',
            
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
