import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Phi Phi Pham",
    template: "%s | Phi Phi Pham",
  },
  description: "Long-life learner, software engineer",
  applicationName: "Phi Phi Pham",
  openGraph: {
    siteName: "Phi Phi Pham",
    title: "Phi Phi Pham",
    description: "Long-life learner, software engineer",
    type: "website",
    url: "https://phiphipham.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phi Phi Pham",
    description: "Long-life learner, software engineer",
  },
  appleWebApp: {
    title: "Phi Phi Pham",
    capable: true,
  },
  other: {
    "application-name": "Phi Phi Pham",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="app-theme">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
