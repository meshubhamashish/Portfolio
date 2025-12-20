import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shubham Ashish | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer & Platform Engineer. Building scalable web platforms with React, TypeScript, and Micro-Frontends. Based in Bengaluru, India.",
  keywords: ["Frontend Engineer", "React", "TypeScript", "Platform Engineer", "Web Development"],
  openGraph: {
    title: "Shubham Ashish | Senior Frontend Engineer",
    description: "Experienced frontend engineer specializing in React, TypeScript, and scalable web platforms.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
