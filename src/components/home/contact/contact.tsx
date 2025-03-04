"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Phone, } from "lucide-react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import FormInput from "@/components/form-custom/input"
import PhoneField from "@/components/form-custom/phone-field"
import FormTextarea from "@/components/form-custom/textarea"

interface User {
  name: string
  phone: string
  email: string
  message: string
}
export default function ContactSection() {

  const form = useForm<User>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })




  const onSubmit = (values: User,) => {

    console.log("Form submitted:", values)

  }
  return (
    <>
      <div id="contact" className="max-w-[1000px]  2xl:max-w-7xl mx-auto py-8 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-[#F5F7FA] rounded-3xl sm:p-8 p-3 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">Biz bilan bog'laning</h2>

            <div className="space-y-6 mb-8">
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
          <div className="bg-[#F5F7FA] rounded-3xl sm:p-8 p-3 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">Aloqa ma'lumoti</h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <FormInput
                methods={form}
                name="name"
                className="mt-1 2xl:h-[50px] h-[40px]"
                label="Ism"
                placeholder="Ismingiz"
                required
              />
              <PhoneField
                methods={form}
                name="phone"
                className="mt-1 2xl:h-[50px] h-[40px]"
                required
              />
              <FormInput
                methods={form}
                name="email"
                className="mt-1 2xl:h-[50px] h-[40px] "
                label="Email"
                placeholder="Email manzilingiz"
                required
              />
              <FormTextarea
                label="Xabar"
                methods={form}
                name="message"
                rows={8}
                wrapperClassName={"h-[120px] "}
                className="h-full mt-1 bg-white"
                placeholder="Sizning xabaringiz"
                required

              />
              <Button
                type="submit"
                className=" bg-yellow-400  hover:bg-yellow-500 text-black font-medium 
                cursor-pointer 2xl:py-6 py-4 px-8 rounded-lg"
              >
                Xabar yuborish
              </Button>

            </form>
          </div>
        </div>
      </div >


    </>
  )
}

