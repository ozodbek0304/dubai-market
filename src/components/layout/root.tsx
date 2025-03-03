import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VIP Tours Dubai - Premium Xizmatlar",
  description: "Dubaydagi shaxsiy VIP xizmatlar, ekskursiyalar, transport va ko'proq",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

