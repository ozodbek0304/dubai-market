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
import { toast } from "sonner"
import { useTranslation } from "react-i18next"
import { ServerErrorResponse } from "../bron-form"


type FormType = {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { mutate, isPending } = usePost();
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
      onError: (error: ServerErrorResponse) => {
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
      <section id="contact" className="max-w-[1000px]  2xl:max-w-7xl mx-auto py-8 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="bg-[#F5F7FA] rounded-3xl sm:p-8 p-3 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 pt-4 sm:pt-0 text-center sm:text-start">{t("Biz bilan bog'laning")}</h2>

            <div className="sm:space-y-6 space-y-4 mb-8">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="flex sm:flex-col gap-2">
                  <div className="flex items-center gap-2"> <Phone className="w-4 h-4" /> UAE</div>
                  <a href="tel:+971581694135" className="text-[#020105] hover:text-yellow-500">
                    +971 58 169 4135
                  </a>
                </div>

                <div className="flex sm:flex-col  gap-2">
                  <div className="flex items-center gap-2">   <Phone className="w-4 h-4" />  Uzbekistan </div>
                  <a href="tel:+998773090070" className="text-[#020105] hover:text-yellow-500">
                    +998 77 309 00 70
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a target="_blank" href="mailto:operations@magical-desert.com" className="text-gray-600 hover:text-yellow-500">
                  operations@magical-desert.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 ">
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
                <a target="_blank" href="https://maps.app.goo.gl/U76foumqKFceoqHw8" className="text-gray-600 hover:text-yellow-500">{t("Dubai, United Arab Emirates")}</a>
              </div>
            </div>

            <div className="flex gap-6 pb-12 sm:pb-0 sm:justify-start justify-center">
              <a className="w-8 h-8" href="https://www.instagram.com/md_tours.ae?igsh=MjRuamhzdmY5NGZn&utm_source=qr" target="_blank">
                <Image priority src="/icons/instagram.png" alt="instagram" width={100} height={100} />
              </a>
              <a className="w-8 h-8" href="https://t.me/DubaiMdtour" target="_blank">
                <Image priority src="/icons/telegram.png" alt="telegram" width={100} height={100} />
              </a>
              <a className="w-8 h-8" href="https://api.whatsapp.com/send/?phone=971581694135&text&type=phone_number&app_absent=0" target="_blank">
                <Image priority src="/icons/phone.png" alt="phone" width={100} height={100} />
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
             <div className="w-full flex justify-end sm:justify-start">
             <Button
              loading={isPending}
                type="submit"
                className=" bg-yellow-400  hover:bg-yellow-500 text-black font-medium 
                cursor-pointer 2xl:py-6 py-4 px-8 rounded-lg"
              >
                {t("Xabar yuborish")}
              </Button>
             </div>

            </form>
          </div>
        </div>
      </section>


    </>
  )
}

