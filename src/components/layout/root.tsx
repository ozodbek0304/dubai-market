"use client"

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import Navbar from "../partials/navbar"
import ContactSection from "../home/contact/contact"
import Footer from "../partials/footer"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VIP Tours Dubai - Premium Xizmatlar",
  description: "Dubaydagi shaxsiy VIP xizmatlar, ekskursiyalar, transport va ko'proq",
}

export default function RootLayout({
  header = <Navbar />,
  children,
  footer = <>
    <ContactSection />
    <Footer />
  </>,
}: Readonly<{
  header?: React.ReactNode,
  children: React.ReactNode,
  footer?: React.ReactNode,
}>) {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <html lang="uz" className="scroll-smooth">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}

