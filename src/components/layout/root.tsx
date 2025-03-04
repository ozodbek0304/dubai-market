"use sever"

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
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {



  return (
    <div>
      <Navbar />
      {children}
      <ContactSection />
      <Footer />
    </div>
  )
}

