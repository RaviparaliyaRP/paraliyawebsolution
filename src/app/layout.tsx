import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Paraliya Web Solution - Professional Web Development Services in Ahmedabad",
  description: "Transform your business with paraliya web solutions - pws. We build fast, modern websites that turn visitors into customers. Trusted by 50+ businesses across India.",
  keywords: "web development, website design, e-commerce, custom applications, Shayona Darshan 49, Near Vaibhav Orthopadic Hospital Chanakyapuri, Ahmedabad - 380061",
  authors: [{ name: "Paraliya Web Solution" }],
  creator: "Paraliya Web Solution",
  publisher: "Paraliya Web Solution",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://paraliyawebsolution.com",
    title: "Paraliya Web Solution - Professional Web Development Services",
    description: "Transform your business with paraliya web solutions - pws. We build fast, modern websites that turn visitors into customers.",
    siteName: "Paraliya Web Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraliya Web Solution - Professional Web Development Services",
    description: "Transform your business with paraliya web solutions - pws. We build fast, modern websites that turn visitors into customers.",
    creator: "@RaviParaliya14",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lottie.host" />
        <link rel="dns-prefetch" href="https://lottie.host" />
        {/* DNS prefetch for form submission */}
        <link rel="dns-prefetch" href="https://script.google.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
