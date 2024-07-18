import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jason Blink',
  description: 'Your website description',
  openGraph: {
    title: 'Your Website Title',
    description: 'Your website description',
    images: [
      {
        url: 'https://github.com/shadcn.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image Alt',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Blink',
    description: 'Your website description',
    images: ['https://github.com/shadcn.png'],
    creator: '@jasonaw98',
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
