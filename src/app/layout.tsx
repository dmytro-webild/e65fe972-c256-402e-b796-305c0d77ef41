import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: "Cannabis in Thailand: Medical Insights, Laws & Research | Thai Cannabis Guide",
  description: "Explore authoritative, evidence-based information on medical cannabis in Thailand, including its history, uses, products, and strict legal framework. Discover research on its effects on hypertension, diabetes, insomnia, and chronic pain.",
  keywords: ["cannabis Thailand, medical cannabis, Thailand cannabis law, CBD Thailand, cannabis for pain, cannabis and diabetes, cannabis and high blood pressure, cannabis insomnia, Thai traditional medicine, cannabis strains, cannabis products, Thailand medical marijuana, cannabis research, medical marijuana Thailand"],
  openGraph: {
    "title": "Cannabis in Thailand: Medical Insights, Laws & Research | ThaiCannabisGuide",
    "description": "Explore authoritative, evidence-based information on medical cannabis in Thailand, including its history, uses, products, and strict legal framework. Discover research on its effects on hypertension, diabetes, insomnia, and chronic pain.",
    "url": "https://www.thaicannabisguide.com",
    "siteName": "ThaiCannabisGuide",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/marijuana-leaf_1150-13454.jpg",
        "alt": "Medical cannabis cultivation in Thailand"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Cannabis in Thailand: Medical Insights, Laws & Research | ThaiCannabisGuide",
    "description": "Explore authoritative, evidence-based information on medical cannabis in Thailand, including its history, uses, products, and strict legal framework. Discover research on its effects on hypertension, diabetes, insomnia, and chronic pain.",
    "images": [
      "http://img.b2bpic.net/free-photo/marijuana-leaf_1150-13454.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
