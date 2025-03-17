import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"
import StarsBackground from "@/components/stars-background"
// Removed CustomCursor import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CommunionHub - Connecting People Across Faiths",
  description: "Connecting people of all faiths through events and community support",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <StarsBackground />
          {/* Removed CustomCursor component */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'