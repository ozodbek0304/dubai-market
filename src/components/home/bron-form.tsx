"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form"
import FormDatePicker from "../form-custom/date-picker"
import FormCheckbox from "../form-custom/checkbox"
import FormTextarea from "../form-custom/textarea"
import { Label } from "../ui/label"
import FormInput from "../form-custom/input"
import PhoneField from "../form-custom/phone-field"

type BronChekbox = "restaurant" | "yacht" | "hotel" | "transport" | "event"

const formCheckboxData: { label: string, name: BronChekbox }[] = [
  {
    label: "Restoran band qilish",
    name: "restaurant"
  },
  {
    label: "Yaxtada sayohat",
    name: "yacht"
  },
  {
    label: "Mehmonxona band qilish",
    name: "hotel"
  },
  {
    label: "Transport xizmatlari",
    name: "transport"
  },
  {
    label: "Maxsus bayram uyushtirish",
    name: "event"
  },
]

export default function BookingForm() {
  const [formData, setFormData] = useState({
    participants: "",
    arrivalDate: "",
    departureDate: "",
    services: {
      restaurant: false,
      yacht: false,
      hotel: false,
      transport: false,
      event: false,
    },
    requirements: "",
    name: "",
    phone: "",
    email: "",
  })

  const form = useForm({
    defaultValues: {
      participants: "",
      arrivalDate: "",
      departureDate: "",
      restaurant: false,
      yacht: false,
      hotel: false,
      transport: false,
      event: false,
      requirements: "",
      name: "",
      phone: "",
      email: "",
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (values: any) => {

    console.log("Form submitted:", values)

  }
  return (
    <div className="sm:py-16 py-8">
      <div className='max-w-[1000px]  2xl:max-w-7xl mx-auto lg:gap-14 sm:gap-6 gap-3 sm:p-12 p-3 rounded-[32px] bg-[#F5F7FA] flex flex-col justify-between lg:flex-row'>
        {/* Left Column */}
        <div className="relative">
          <h1 className="sm:text-2xl text-center sm:text-start text-xl font-bold lg:mb-6 mb-2">MyGroup uchun bron  qilish</h1>
          <div className="w-[320px] hidden lg:block h-[256px] absolute top-[50%] translate-y-[-50%] mx-auto">
            <Image src={"/icons/star-icon.png"} width={250} height={250} alt="form_icon" />
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6 bg-white sm:rounded-[32px] rounded-2xl lg:w-[588px]  sm:p-8 p-3 ">
          <h2 className="text-xl font-semibold mb-6">Bron qilish ma'lumotlari</h2>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* <SelectField
              methods={form}
              name="arrivalDate"
            /> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end">
              <FormDatePicker
                methods={form}
                name="arrivalDate"
                label="Kelish va ketish sanasi"
                placeholder="Kelish sanasi"
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
              />
              <FormDatePicker
                methods={form}
                name="arrivalDate"
                placeholder="Ketish sanasi"
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
              />
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Xizmatlar turi <span className="text-red-500">*</span>
              </Label>
              <div className="w-full mt-1 flex flex-wrap gap-3">
                {formCheckboxData?.map((item) => (
                  <FormCheckbox
                    key={item.name}
                    methods={form}
                    name={item.name}
                    label={item.label}
                    required
                  />
                ))
                }
              </div>
            </div>

            <FormTextarea
              label="Qo'shimcha talablar"
              methods={form}
              name="requirements"
              rows={8}
              wrapperClassName={"h-[120px]"}
              className="h-full mt-1"

            />

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Aloqa ma'lumotlari</h3>
              <div className="space-y-4">
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
              </div>
            </div>

            <Button className="w-full sm:mt-4 mt-3 bg-[#FFD700] hover:bg-[#FFD700]/90 cursor-pointer text-black font-medium p-6 rounded-lg 2xl:h-[50px] h-[40px]">
              Buyurtmani yuborish
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

