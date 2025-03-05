"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Phone, } from "lucide-react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import FormInput from "@/components/form-custom/input"
import PhoneField from "@/components/form-custom/phone-field"
import FormTextarea from "@/components/form-custom/textarea"
import { usePost } from "@/services/https"
import toast from 'react-hot-toast';
import { useTranslation } from "react-i18next"


type FormType = {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { mutate } = usePost();
  const { t } = useTranslation();

  const form = useForm<FormType>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })




  const onSubmit = (values: FormType,) => {
    mutate("contact-sale", values, {
      onSuccess: () => {
        toast.success(t("Xush kelibsiz! Xabaringiz yuborildi"));
        form.reset();
      },
      onError: (error: any) => {
        if (error.response?.data) {
          const errors = error.response.data;
          Object.entries(errors).forEach(([key, message]) => {
            form.setError(key as keyof FormType, {
              type: "server",
              message: message as string,
            });
          });
        } else {
          toast.error(t("Xatolik yuz berdi."));
        }
      },
    })

  }



  return (
    <>
      <div id="contact" className="max-w-[1000px]  2xl:max-w-7xl mx-auto py-8 sm:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-[#F5F7FA] rounded-3xl sm:p-8 p-3 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">{t("Biz bilan bog'laning")}</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+971581694135" className="text-[#020105] hover:text-yellow-500">
                    UAE
                    call, whatsaap, telegram <br />
                    +971 58 169 4135
                  </a>
                  <a href="tel:+998773090070" className="text-[#020105] hover:text-yellow-500">
                    Uzbekistan
                    call, whtsaap telegram <br />
                    +998 77 309 00 70
                  </a>
                </div>
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
                <span className="text-gray-600">{t("Dubai, United Arab Emirates")}</span>
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
            <h2 className="text-2xl font-bold mb-6 text-center sm:text-start">{t("Aloqa ma'lumoti")}</h2>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

              <FormInput
                methods={form}
                name="name"
                className="mt-1 2xl:h-[50px] h-[40px]"
                label={t("Ism")}
                placeholder={t("Ismingiz")}
                required
              />
              <PhoneField
                methods={form}
                name="phone"
                className="mt-1 2xl:h-[50px] h-[40px]"
                required={form.watch("email") ? false : true}
              />
              <FormInput
                methods={form}
                name="email"
                className="mt-1 2xl:h-[50px] h-[40px] "
                label={t("Email")}
                placeholder={t("Email manzilingiz")}
                required={form.watch("phone") ? false : true}
              />
              <FormTextarea
                methods={form}
                label={t("Xabar")}
                name="message"
                wrapperClassName={"h-[120px] "}
                className="h-full mt-1 bg-white"
                placeholder={t("Sizning xabaringiz")}
                required

              />
              <Button
                type="submit"
                className=" bg-yellow-400  hover:bg-yellow-500 text-black font-medium 
                cursor-pointer 2xl:py-6 py-4 px-8 rounded-lg"
              >
                {t("Xabar yuborish")}
              </Button>

            </form>
          </div>
        </div>
      </div >


    </>
  )
}

