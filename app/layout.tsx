import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://nick.af`),
  title: {
    default: "Jason",
    template: `%s Hello`,
  },
  description:
    "Hi! I'm Nick, a full stack developer and submariner working on various " +
    "projects. In my free time I write software, technical articles, and build things.",
  openGraph: {
    siteName: "Jason",
    type: "website",
    images: [
      {
        url: "/therock.webp",
        width: 256,
        height: 256,
        alt: "therock",
      },
    ],
  },
  twitter: {
    site: `@jasonaw98`,
    creator: `@jasonaw98`,
    card: "summary",
    // card: "summary_large_image",
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
