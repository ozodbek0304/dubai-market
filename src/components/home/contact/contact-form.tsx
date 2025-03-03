"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="w-full container mx-auto p-6 bg-gray-400/30 backdrop-blur-md rounded-3xl border border-gray-300/50">
      <p className="text-white text-lg mb-6">Biz sizga Tur tanlashga yordam beramiz! Bizga aloqaga chiqing</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-200/30 border-0 backdrop-blur-sm placeholder:text-gray-300 text-white h-12 rounded-xl"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200/30 border-0 backdrop-blur-sm placeholder:text-gray-300 text-white h-12 rounded-xl"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-200/30 border-0 backdrop-blur-sm placeholder:text-gray-300 text-white h-12 rounded-xl"
          />
        </div>

        <Textarea
          name="message"
          placeholder="Xabar"
          value={formData.message}
          onChange={handleChange}
          className="bg-gray-200/30 border-0 backdrop-blur-sm placeholder:text-gray-300 text-white min-h-[100px] rounded-xl resize-none"
        />

        <div className="flex flex-col md:flex-row justify-end gap-4 pt-2">
          <Button
            type="submit"
            className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-medium px-8 py-2 rounded-full h-12"
          >
            Xabar Yuborish
          </Button>
          <Button
            type="button"
            className="bg-white hover:bg-white/90 text-black font-medium px-8 py-2 rounded-full h-12"
          >
            MyGroup bron qilish
          </Button>
        </div>
      </form>
    </div>
  )
}

