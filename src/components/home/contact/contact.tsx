"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Phone, Send } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-[#F5F7FA] rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Biz bilan bog'laning</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+97150123456" className="text-gray-600">
                  +971 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@mtoursdubai.com" className="text-gray-600">
                  contact@mtoursdubai.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-600">Dubai, United Arab Emirates</span>
              </div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="">
                <Image src="/icons/instagram.png" alt="instagram" width={40} height={40} />
              </a>
              <a href="#" className="">
                <Image src="/icons/telegram.png" alt="telegram" width={40} height={40} />
              </a>
              <a href="#" className="">
                <Image src="/icons/phone.png" alt="phone" width={40} height={40} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#F5F7FA] rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Aloqa ma'lumoti</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="ISM"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefon raqam"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Xabar"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className=" bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-lg"
              >
                Xabar yuborish
              </Button>
            </form>
          </div>
        </div>
      </div>


    </>
  )
}

