import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "LinkedIn Agent - AI-Powered LinkedIn Assistant",
  description: "Automate your LinkedIn networking, content creation, and professional growth with intelligent AI assistance.",
  keywords: ["LinkedIn", "AI", "Automation", "Networking", "Professional", "Assistant"],
  authors: [{ name: "LinkedIn Agent Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "LinkedIn Agent - AI-Powered LinkedIn Assistant",
    description: "Automate your LinkedIn networking, content creation, and professional growth with intelligent AI assistance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Agent - AI-Powered LinkedIn Assistant",
    description: "Automate your LinkedIn networking, content creation, and professional growth with intelligent AI assistance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
