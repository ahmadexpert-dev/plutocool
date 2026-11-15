import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

// Optimized SEO Metadata for Dubai Local Business
export const metadata: Metadata = {
  title: {
    default: "Pluto Cool Technical Services | AC Repair & Installation Dubai",
    template: "%s | Pluto Cool Technical Services",
  },
  description:
    "AC repair & maintenance, duct & coil cleaning, AC installation, MEP services & AMC, painting, and HVAC ducting & VAV in Dubai.",
  keywords: [
    "AC repair Dubai",
    "AC installation Dubai",
    "AC duct cleaning Dubai",
    "AC coil cleaning Dubai",
    "air conditioning maintenance Dubai",
    "MEP services Dubai",
    "AMC Dubai",
    "painting services Dubai",
    "HVAC ducting Dubai",
    "VAV system Dubai",
    "Pluto Cool Technical Services",
    "best AC technicians Dubai",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.plutocool.com", // Replace with your actual domain
  },
  openGraph: {
    title: "Pluto Cool Technical Services | AC Repair & Installation Dubai",
    description:
      "AC repair & maintenance, duct & coil cleaning, AC installation, MEP services & AMC, painting, and HVAC ducting & VAV in Dubai.",
    url: "https://www.plutocool.com", // Replace with your actual domain
    siteName: "Pluto Cool Technical Services",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${manrope.className} antialiased`}>
      <body className='select-none'>{children}</body>
    </html>
  );
}
