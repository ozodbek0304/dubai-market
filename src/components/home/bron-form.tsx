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
import ErrorMessage from "../ui/error-message"
import { Checkbox } from "../ui/checkbox"
import { toast } from "sonner"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"


function formatDate(dateStr: string) {
  const [day, month, year] = dateStr.split("/").map(Number);

  const date = new Date(year, month - 1, day, 0, 0, 0);

  const formattedDate = date.toISOString()?.split(".")[0];
  return formattedDate;
}






type FormType = {
  count_people: string;
  arrival: string;
  departure: string;
  extra_demands: string;
  name: string;
  email: string;
  phone: string;
  services: number[];
}

export interface ServerErrorResponse {
  response?: {
    data?: Record<string, string>;
  };
}


export default function BookingForm() {
  const { data, isSuccess, refetch } = useGet("services");
  const { mutate, isPending } = usePost();
  const { t, i18n } = useTranslation();


  const form = useForm<FormType>({
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
        toast.success(t("Xush kelibsiz! buyurtma qabul qilindi"))
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

  useEffect(() => {
    refetch();
  }, [i18n.language, refetch]);



  return (
    <section id="mygroup" className="sm:py-16 py-8">

      <div className='max-w-[1000px]  2xl:max-w-7xl mx-auto lg:gap-14 sm:gap-6 gap-3 sm:p-12 p-3 rounded-[32px] bg-[#F5F7FA] flex flex-col justify-between lg:flex-row'>
        {/* Left Column */}
        <div className="relative">
          <h1 className="sm:text-2xl text-center sm:text-start text-xl font-bold lg:mb-6 mb-2">{t("MyGroup uchun bron qilish")}</h1>
          <div className="w-[320px] hidden lg:block h-[256px] absolute top-[55%] translate-y-[-55%] mx-auto">
            <Image priority src={"/icons/star-icon.png"} width={300} height={300} alt="form_icon" />
          </div>

          <p className="lg:max-w-[320px]  text-sm 2xl:text-md">
            {t("Biz har qanday guruh va oilalar uchun sayohatlar, transferlar va boshqa xizmatlarni tashkil qilamiz. Shuningdek, Dubayda VIP sayohatlarni tashkil qilish bo‘yicha ixtisoslashgan eksklyuziv kompaniyamiz. Maqsadimiz – hashamat, qulaylik va shaxsiy yondashuvni qadrlaydigan mijozlarimizga noyob va shaxsiylashtirilgan sayohat xizmatlarini taqdim etish. Har bir sayohatingizni unutilmas tajribaga aylantirishga intilamiz.")}
          </p>

        </div>

        {/* Right Column */}
        <div className="space-y-6 bg-white sm:rounded-[32px] rounded-2xl lg:w-[588px]  sm:p-8 p-3 ">
          <h2 className="text-xl font-semibold mb-6">{t("Bron qilish ma'lumotlari")}</h2>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormInput
              type="number"
              methods={form}
              name="count_people"
              className="mt-1 2xl:h-[50px] h-[40px]"
              label={t("Ishtirokchilar sonini tanlang")}
              placeholder={t("Ishtirokchilar sonini tanlang")}
              message={t("Ishtirokchilar sonini kiriting")}
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end">
              <FormDatePicker
                methods={form}
                name="arrival"
                label={t("Kelish va ketish sanasi")}
                message={t("Kelish sanasini kiriting")}
                placeholder={t("Kelish sanasi")}
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
                fromDate={new Date()}

              />
              <FormDatePicker
                message={t("Ketish sanasini kiriting")}
                methods={form}
                name="departure"
                placeholder={t("Ketish sanasi")}
                className="2xl:h-[50px] h-[40px] mt-1 cursor-pointer"
                required
                fromDate={form.watch("arrival") ? new Date(formatDate(form.watch("arrival"))) : new Date()}
              />
            </div>

            <div>
              <Label className={`block text-sm mb-1 ${form.formState.errors.services ? "text-destructive" : ""}`} >
                {t("Xizmatlar turi")} <span className="text-red-500">*</span>
              </Label>
              <div className="w-full mt-1 flex flex-wrap gap-3">
                {isSuccess && data?.map((item: { title: string, id: number }) => (
                  <div key={item.id} className="flex items-center gap-2 cursor-pointer">
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
              label={t("Qo'shimcha talablar")}
              methods={form}
              name="extra_demands"
              rows={8}
              wrapperClassName={"h-[120px]"}
              className="h-full mt-1"
              message={t("Qo'shimcha talablarni kiriting")}
            />

            <div className="pt-4">
              <h1 className="text-lg font-semibold mb-4">{t("Aloqa ma'lumotlari")}</h1>
              <div className="space-y-4">
                <FormInput
                  methods={form}
                  name="name"
                  className="mt-1 2xl:h-[50px] h-[40px]"
                  label={t("Ism")}
                  placeholder={t("Ismingiz")}
                  message={t("Ismingizni kiriting")}
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
                  message={t("Ismingizni kiriting")}
                />
              </div>
            </div>

            <Button
              loading={isPending}
              type="submit"
              onClick={() => {
                if (watchedServices.length === 0) {
                  form.setError("services", {
                    type: "manual",
                    message: "Kamida bitta xizmat tanlanishi shart!",
                  });
                }
              }}
              className="w-full sm:mt-4 mt-3 bg-[#FFD700] hover:bg-[#FFD700]/90 cursor-pointer text-black font-medium p-6 rounded-lg 2xl:h-[50px] h-[40px]">
              {t("Buyurtmani yuborish")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

