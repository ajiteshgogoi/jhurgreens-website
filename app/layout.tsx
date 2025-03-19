import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JhurGreens International | Sourcing Agency and Exporter",
  description: "Professional export and sourcing agency specializing in product sourcing, manufacturing partnerships, quality inspection, and shipping logistics. Connect with reliable manufacturers worldwide.",
  generator: "Next.js",
  applicationName: "JhurGreens International",
  keywords: ["export agency", "product sourcing", "manufacturing partnerships", "quality inspection", "shipping logistics", "global trade", "international business"],
  authors: [{ name: "JhurGreens International" }],
  colorScheme: "light",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jhurgreens.com",
    title: "JhurGreens International | Sourcing Agency and Exporter",
    description: "Professional export and sourcing agency specializing in product sourcing, manufacturing partnerships, quality inspection, and shipping logistics. Connect with reliable manufacturers worldwide.",
    siteName: "JhurGreens International",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JhurGreens International Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JhurGreens International | Sourcing Agency and Exporter",
    description: "Professional export and sourcing agency specializing in product sourcing, manufacturing partnerships, quality inspection, and shipping logistics.",
    images: ["/logo.png"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
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