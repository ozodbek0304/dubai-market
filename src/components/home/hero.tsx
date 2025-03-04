"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import FormInput from "../form-custom/input"
import FormTextarea from "../form-custom/textarea"

export default function Hero() {
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

  const form = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <section className="relative 2xl:py-52 py-40 ">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0 "
        style={{
          backgroundImage: "url(hero.jpeg)",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative  z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center text-white mb-8">
          <div className="mb-6">
            <img src="logo.png" alt="MD Tours" className="h-16 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">DUBAYDAGI SHAXSIY VIP XIZMATLAR</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
          ""Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz"
          </p>
        </div>

        <div className="w-full container px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/20 backdrop-blur-sm border-0">
            <CardContent className="p-8">
              <p className="text-start text-[24px] text-white mb-4">
                Biz sizga Tur tanlashga yordam beramiz! Bizga aloqaga chiqing
              </p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col lg:flex-row justify-between items-start lg:gap-8 gap-4 ">
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] mb-[8px]">
                    <FormInput
                      methods={form}
                      wrapperClassName="h-[50px] sm:h-[59px]"
                      type="text"
                      name="name"
                      placeholder="Ismingiz"
                      className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[50px] sm:h-[59px]"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      methods={form}
                      wrapperClassName="h-[50px] sm:h-[59px]"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[50px] sm:h-[59px]"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <FormInput
                      methods={form}
                      wrapperClassName="h-[50px] sm:h-[59px]"
                      type="tel"
                      name="phone"
                      placeholder="Telefon"
                      className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[50px] sm:h-[59px]"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <FormTextarea
                    methods={form}
                    name="message"
                    placeholder="Xabar"
                    className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[50px] sm:h-[59px]"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-1  w-full lg:w-[224px] gap-4 ">
                  <Button type="submit" className="bg-yellow-400  hover:bg-yellow-500 h-[50px] sm:h-[59px] xl:rounded-[16px] xl:px-8 xl:text-md text-black font-medium">
                    Xabar Yuborish
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-white text-black h-[50px]  sm:h-[59px] xl:rounded-[16px] xl:px-8 xl:text-md border-white hover:bg-gray-100"
                  >
                    MyGroup bron qilish
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

