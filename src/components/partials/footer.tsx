"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t bg-[#F5F7FA] py-12">
      <div className="2xl:max-w-7xl max-w-[1000px] mx-auto px-4 sm:p-0 p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-9">
            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Telefon")}</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+971581694135" className="text-[#020105] hover:text-yellow-500">
                  UAE
                  call, whatsaap, telegram
                  +971 58 169 4135
                </a>
                <a href="tel:+998773090070" className="text-[#020105] hover:text-yellow-500">
                  Uzbekistan
                  call, whtsaap telegram
                  +998 77 309 00 70
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Manzil")}</h4>
              <a href="#" className="text-[#020105] hover:text-yellow-500">{t("Dubai, United Arab Emirates")}</a>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Elektron pochta")}</h4>
              <a href="mailto:contact@mtoursdubai.com<" className="text-[#020105] hover:text-yellow-500">{t("Dubai, United Arab Emirates")}</a>

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Bosh sahifa")}
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Xizmatlar")}
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Foydalanuvchilar fikrlari")}
            </a>
          </div>

          <div className="flex flex-col gap-5">

            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Biz haqimizda")}
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("MyGroup bron qilish")}
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Aloqa")}
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-[#020105] mb-2">{t("Ijtimoiy tarmoqlar")}</h3>
            <div className="flex gap-4">
              <a href="#" >
                <Image priority height={35} width={35} alt="instagram" src={"/icons/instagram.png"} />
              </a>
              <a href="#" >
                <Image priority height={35} width={35} alt="telegram" src={"/icons/telegram.png"} />
              </a>
              <a href="#" >
                <Image priority height={35} width={35} alt="phone" src={"/icons/phone.png"} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full flex items-center mt-7 justify-between">
          <p className="text-[#9A999B]">{t("© 2025 M Tours. Barcha huquqlar himoyalangan.")}</p>
          <p className="text-[#020105]">{t("Barcha huquqlar himoyalangan")}</p>
        </div>

      </div>
    </footer>
  )
}

