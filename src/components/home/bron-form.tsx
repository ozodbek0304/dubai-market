"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useForm } from "react-hook-form"
import FormDatePicker from "../form-custom/date-picker"
import FormTextarea from "../form-custom/textarea"
import { Label } from "../ui/label"
import FormInput from "../form-custom/input"
import PhoneField from "../form-custom/phone-field"
import { useGet, usePost } from "@/services/https"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../ui/error-message"
import { Checkbox } from "../ui/checkbox"
import toast from 'react-hot-toast';


function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/").map(Number);

  const date = new Date(year, month - 1, day, 0, 0, 0);

  const formattedDate = date.toISOString().split(".")[0];
  return formattedDate;
}




const formSchema = z.object({
  count_people: z.string().min(1, "Ishtirokchilar soni majburiy!"),
  arrival: z.string().min(1, "Kelish sanasi majburiy!"),
  departure: z.string().min(1, "Ketish sanasi majburiy!"),
  extra_demands: z.string().min(1, "Qo‘shimcha talablar majburiy!"),
  name: z.string().min(1, "Ism majburiy!"),
  email: z.string().email("Yaroqli email kiriting!").optional(),
  phone: z.string().min(1, "Telefon raqam majburiy!").optional(),
  services: z.array(z.number()).min(1, "Kamida bitta xizmat tanlanishi shart!"),
})


type FormType = z.infer<typeof formSchema>;


export default function BookingForm() {
  const { data, isSuccess } = useGet("services");
  const { mutate } = usePost();


  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "count_people": "",
      "arrival": "",
      "departure": "",
      "extra_demands": "",
      "name": "",
      "email": "",
      "phone": "",
      "services": []
    }
  })

  const watchedServices = form.watch('services')


  const handleSubmit = (values: FormType) => {

    const formattedData = ({
      ...values,
      arrival: formatDate(values.arrival),
      departure: formatDate(values.departure),
    })

    mutate("tourbook", formattedData, {
      onSuccess: () => {
        toast.success("Xush kelibsiz! buyurtma qabul qilindi")
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
          toast.error("Xatolik yuz berdi.");
        }
      },
    })



  }


  return (
    <div id="mygroup" className="sm:py-16 py-8">
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
            <FormInput
              type="number"
              methods={form}
              name="count_people"
              className="mt-1 2xl:h-[50px] h-[40px]"
              label="Ishtirokchilar sonini tanlang"
              placeholder="Ishtirokchilar sonini tanlang"
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end">
              <FormDatePicker
                methods={form}
                name="arrival"
                label="Kelish va ketish sanasi"
                placeholder="Kelish sanasi"
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
              />
              <FormDatePicker
                methods={form}
                name="departure"
                placeholder="Ketish sanasi"
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
              />
            </div>

            <div>
              <Label className={`block text-sm mb-1 ${form.formState.errors.services ? "text-destructive" : ""}`} >
                Xizmatlar turi <span className="text-red-500">*</span>
              </Label>
              <div className="w-full mt-1 flex flex-wrap gap-3">
                {isSuccess && data?.map((item: { title: string, id: number }) => (
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={watchedServices.includes(item.id)}
                      onCheckedChange={() => {
                        const updatedServices = watchedServices.includes(item.id)
                          ? watchedServices.filter((s) => s !== item.id)
                          : [...watchedServices, item.id];

                        form.setValue("services", updatedServices);
                        if (updatedServices.length > 0) {
                          form.clearErrors("services");
                        }
                      }}
                      id={`services-${item.id}`}
                    />
                    <Label
                      htmlFor={`services-${item.id}`}
                    >
                      {item.title}
                    </Label>
                  </div>
                ))
                }
              </div>



              {form.formState.errors.services && (
                <ErrorMessage className="mt-2">
                  {form.formState.errors.services.message?.toString()}
                </ErrorMessage>
              )}
            </div>

            <FormTextarea
              label="Qo'shimcha talablar"
              methods={form}
              name="extra_demands"
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

