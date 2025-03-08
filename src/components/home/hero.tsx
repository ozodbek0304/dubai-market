"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import FormInput from "../form-custom/input"
import FormTextarea from "../form-custom/textarea"
import PhoneField from "../form-custom/phone-field"
import { usePost } from "@/services/https"
import { useTranslation } from "react-i18next"
import { ServerErrorResponse } from "./bron-form"
import Image from "next/image"
import Head from "next/head"
import { toast } from "sonner"


interface FormType {
  name: string,
  email: string,
  phone: string | number,
  message: string
}

export default function Hero() {
  const { mutate, isPending } = usePost();
  const { t } = useTranslation();

  const form = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
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
    <section className="relative sm:p-5 p-3 ">

      <Head>
        <title>{t("Dubaydagi shaxsiy vip xizmatlar")}</title>
      </Head>

      {/* Background image */}
      <div
        className="inset-0 bg-cover bg-no-repeat bg-center p-3 sm:p-6 sm:pb-[80px] pb-24 rounded-[32px] lg:rounded-[64px] z-0 "
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(30, 29, 33, 0.3886) 0%, rgba(30, 29, 33, 0.2436) 61.98%, rgba(30, 29, 33, 0.5046) 100%), url(hero.jpeg)",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative  z-10 h-full flex flex-col justify-center items-center 2xl:max-w-7xl max-w-[1000px]  mx-auto pt-24">
          <div className="text-center text-white mb-8">
            <div className="mb-8">
              <Image priority height={64} width={340} src="/logo.png" alt="MD Tours" className=" mx-auto" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-black  mb-4">{t("DUBAYDAGI SHAXSIY VIP XIZMATLAR")}</h1>
            <p className="text-sm md:text-xl ">
              &ldquo;&ldquo;{t("Biz siz uchun hashamatli xizmatlarni tashkillashtiramiz")}&rdquo;
            </p>
          </div>

          <div className="w-full ">
            <Card

              className="bg-white/20 backdrop-blur-sm border-0 p-0">
              <CardContent className="sm:p-6 2xl:p-10 p-3">
                <p className="text-start 2xl:text-[24px] sm:text-lg text-[14px] text-white 2xl:mb-4 sm:mb-2">
                  {t("Biz sizga Tur tanlashga yordam beramiz! Bizga aloqaga chiqing")}
                </p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col  justify-end items-end  gap-3 ">
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] mb-[8px]">
                      <FormInput
                        methods={form}
                        type="text"
                        name="name"
                        required
                        message={t("Ismingizni kiriting")}
                        placeholder={t("Ismingiz")}
                        className=" bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      />
                      <PhoneField
                        label="phone"
                        labelClass={"hidden"}
                        methods={form}
                        name="phone"
                        className=" 2xl:h-[59px] !bg-transparent  h-[40px]"
                        required={form.watch("email") ? false : true}
                        inputClassName="!bg-transparent !text-white !border-[#FFFFFF33]"
                        countrySelectorStyleProps={{
                          buttonClassName: "!h-full !px-3  !rounded-l-md !bg-transparent !border-[#FFFFFF33]"
                        }}
                      />
                      <FormInput
                        methods={form}
                        message={t("Emailingizni kiriting")}
                        type="email"
                        required={form.watch("phone") ? false : true}
                        name="email"
                        placeholder={t("Email")}
                        className=" bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      />

                    </div>
                    <FormTextarea
                      methods={form}
                      name="message"
                      placeholder={t("Xabar")}
                      className="bg-transparent border-[#FFFFFF33] text-white placeholder:text-white h-[40px] 2xl:h-[59px]"
                      rows={3}
                      message={t("Xabaringizni kiriting")}
                      required
                    />
                  </div>

                  <div className=" w-full flex justify-end ">
                    <Button loading={isPending} type="submit" className="bg-yellow-400 cursor-pointer sm:w-[220px] w-full   hover:bg-yellow-500 h-[40px] 2xl:h-[59px] 2xl:rounded-[16px] xl:px-8 xl:text-md text-black font-medium">
                      {t("Xabar Yuborish")}
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

