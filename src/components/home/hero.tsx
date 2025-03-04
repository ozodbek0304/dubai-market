"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import FormInput from "../form-custom/input"
import FormTextarea from "../form-custom/textarea"

export default function Hero() {

  const form = useForm<any>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  })

  const handleSubmit = (values: any) => {
    console.log("Form submitted:", values)
   
  }

  return (
    <section className="relative sm:p-5 p-3 ">
      {/* Background image */}
      <div
        className="inset-0 bg-cover bg-no-repeat bg-center p-3 sm:p-6 sm:pb-[80px] pb-24 rounded-[32px] sm:rounded-[64px] z-0 "
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(30, 29, 33, 0.3886) 0%, rgba(30, 29, 33, 0.2436) 61.98%, rgba(30, 29, 33, 0.5046) 100%), url(hero.jpeg)",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative  z-10 h-full flex flex-col justify-center items-center 2xl:max-w-7xl max-w-[1000px]  mx-auto pt-24">
          <div className="text-center text-white mb-8">
            <div className="mb-6">
              <img src="logo.png" alt="MD Tours" className="h-16 mx-auto" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">DUBAYDAGI SHAXSIY VIP XIZMATLAR</h1>
            <p className="text-sm md:text-xl ">
              ""Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz"
            </p>
          </div>

          <div className="w-full ">
            <Card className="bg-white/20 backdrop-blur-sm border-0 p-0">
              <CardContent className="sm:p-8 p-3">
                <p className="text-start sm:text-[24px] text-[14px] text-white mb-4">
                  Biz sizga Tur tanlashga yordam beramiz! Bizga aloqaga chiqing
                </p>

                <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full flex flex-col lg:flex-row justify-between items-start lg:gap-8 gap-4 ">
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] mb-[8px]">
                      <FormInput
                        methods={form}
                        wrapperClassName="h-[40px] 2xl:h-[59px]"
                        type="text"
                        name="name"
                        placeholder="Ismingiz"
                        className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      />
                      <FormInput
                        methods={form}
                        wrapperClassName="h-[40px] 2xl:h-[59px]"
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      />
                      <FormInput
                        methods={form}
                        wrapperClassName="h-[40px] 2xl:h-[59px]"
                        type="tel"
                        name="phone"
                        placeholder="Telefon"
                        className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"

                      />
                    </div>
                    <FormTextarea
                      methods={form}
                      name="message"
                      placeholder="Xabar"
                      className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      rows={3}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-1  w-full lg:w-[224px] sm:gap-4 gap-2 ">
                    <Button type="submit" className="bg-yellow-400  hover:bg-yellow-500 h-[40px] 2xl:h-[59px] xl:rounded-[16px] xl:px-8 xl:text-md text-black font-medium">
                      Xabar Yuborish
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-white text-black h-[40px]  2xl:h-[59px] xl:rounded-[16px] xl:px-8 xl:text-md border-white hover:bg-gray-100"
                    >
                      MyGroup bron qilish
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  )
}

