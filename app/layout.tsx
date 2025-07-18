import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FINSPARK 2025 - PSBs Hackathon Series",
  description:
    "Join Bank of Maharashtra & COEP Technological University for an epic 36-hour coding marathon that will reshape the future of FinTech and Cybersecurity. PSBs Hackathon Series 2025.",
  keywords: "hackathon, fintech, cybersecurity, banking, COEP, Bank of Maharashtra, PSBs, innovation, technology",
  authors: [{ name: "FINSPARK 2025 Team" }],
  openGraph: {
    title: "FINSPARK 2025 - PSBs Hackathon Series",
    description: "36-hour innovation challenge in FinTech and Cybersecurity",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FINSPARK 2025 - PSBs Hackathon Series",
    description: "36-hour innovation challenge in FinTech and Cybersecurity",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
