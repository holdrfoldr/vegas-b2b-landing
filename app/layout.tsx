import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600", "700"], // Optimized: removed 300 and 500
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vegas-b2b-landing.vercel.app'),
  title: {
    default: "Vegas-Tier Client Protection | HIPAA Security & Lead Recovery",
    template: "%s | Vegas-Tier Protection"
  },
  description: "Automated HIPAA Security & Lead Recovery for High-Volume Med Spas. 24/7 threat detection, AI receptionist, and military-grade encrypted backups. Trusted by leading aesthetic clinics.",
  keywords: [
    "HIPAA compliance",
    "med spa security",
    "healthcare cybersecurity",
    "lead recovery",
    "AI receptionist",
    "HIPAA breach prevention",
    "medical data protection",
    "ransomware protection",
    "after-hours booking",
    "aesthetic clinic security"
  ],
  authors: [{ name: "Vegas-Tier Protection" }],
  creator: "Vegas-Tier Protection",
  publisher: "Vegas-Tier Protection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vegas-b2b-landing.vercel.app",
    title: "Vegas-Tier Client Protection | HIPAA Security & Lead Recovery",
    description: "Automated HIPAA Security & Lead Recovery for High-Volume Med Spas. 24/7 threat detection, AI receptionist, and military-grade encrypted backups.",
    siteName: "Vegas-Tier Protection",
    images: [
      {
        url: "/og-image.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Vegas-Tier Protection - HIPAA Security & Lead Recovery for Med Spas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vegas-Tier Client Protection | HIPAA Security & Lead Recovery",
    description: "Automated HIPAA Security & Lead Recovery for High-Volume Med Spas. 24/7 threat detection, AI receptionist, and military-grade encrypted backups.",
    images: ["/og-image.png"], // You'll need to create this image
    creator: "@vegastier", // Update with actual Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const root = document.documentElement;
                  root.className = theme;
                  // Set background color immediately to prevent flash
                  root.style.backgroundColor = theme === 'dark' ? '#0a0e17' : '#ffffff';
                  root.style.colorScheme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
