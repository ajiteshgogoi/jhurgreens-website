import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light"
}

export const metadata: Metadata = {
  title: "JhurGreens International | Leading Export & Sourcing Agency in India",
  description: "JhurGreens International is a premier sourcing agency and exporter from India, specializing in product sourcing, manufacturing partnerships, quality inspection and shipping logistics. Connect with us for global trade solutions.",
  generator: "Next.js",
  applicationName: "JhurGreens International",
  keywords: ["export agency india", "sourcing agency", "product sourcing", "manufacturing partnerships", "quality inspection", "shipping logistics", "global trade", "international business", "indian exports", "trade consultancy"],
  authors: [{ name: "JhurGreens International", url: "https://jhurgreens.com" }],
  creator: "JhurGreens International",
  publisher: "JhurGreens International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://jhurgreens.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jhurgreens.com",
    title: "JhurGreens International | Leading Export & Sourcing Agency in India",
    description: "JhurGreens International is a premier sourcing agency and exporter from India, specializing in product sourcing, manufacturing partnerships, quality inspection and shipping logistics. Connect with us for global trade solutions.",
    siteName: "JhurGreens International",
    images: [
      {
        url: "/og.png",
        width: 1920,
        height: 1080,
        alt: "JhurGreens International Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JhurGreens International | Leading Export & Sourcing Agency in India",
    description: "JhurGreens International is a premier sourcing agency and exporter from India, specializing in product sourcing, manufacturing partnerships, quality inspection and shipping logistics.",
    images: ["/og.png"],
    creator: "@jhurgreens",
    site: "@jhurgreens",
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
  alternates: {
    canonical: "https://jhurgreens.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://jhurgreens.com/#organization",
                  "name": "JhurGreens International",
                  "url": "https://jhurgreens.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://jhurgreens.com/og.png",
                    "width": 1920,
                    "height": 1080
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "F No 1A, Dishant Palace, Wireless",
                    "addressLocality": "Guwahati",
                    "addressRegion": "Assam",
                    "postalCode": "781028",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9395877156",
                    "contactType": "sales",
                    "email": "info@jhurgreens.com",
                    "areaServed": "Worldwide",
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/jhurgreens/",
                    "https://www.linkedin.com/company/jhurgreens/",
                    "https://www.instagram.com/jhurgreens/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://jhurgreens.com/#website",
                  "url": "https://jhurgreens.com",
                  "name": "JhurGreens International",
                  "publisher": {
                    "@id": "https://jhurgreens.com/#organization"
                  },
                  "description": "Premier sourcing agency and exporter from India, specializing in product sourcing, manufacturing partnerships, quality inspection and shipping logistics.",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://jhurgreens.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}