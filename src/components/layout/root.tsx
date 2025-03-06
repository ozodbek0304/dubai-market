"use sever"

import type React from "react"
import type { Metadata } from "next"
import Navbar from "../partials/navbar"
import ContactSection from "../home/contact/contact"
import Footer from "../partials/footer"
import { Toaster } from "sonner"


export const metadata: Metadata = {
  title: "VIP Tours Dubai - Premium Xizmatlar",
  description: "Dubaydagi shaxsiy VIP xizmatlar, ekskursiyalar, transport va ko'proq",
}

export default function RootLayout({
  children,
  navbarTheme = false,
}: Readonly<{
  children: React.ReactNode,
  navbarTheme?: boolean
}>) {



  return (
    <div>
      <Toaster />
      <Navbar navbarTheme={navbarTheme} />
      {children}
      <ContactSection />
      <Footer />
    </div>
  )
}

