"use client"

import { Phone } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t bg-[#F5F7FA] sm:py-12 py-6">
      <div className="2xl:max-w-7xl max-w-[1000px] mx-auto px-4 lg:p-0 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-8 gap-4">

          <div className="sm:flex flex-col col-span-2 hidden 2x:gap-9 gap-5">
            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Telefon")}</h4>
              <div className="flex flex-col gap-2">
                <a href="tel:+971581694135" className="text-[#020105] hover:text-yellow-500">
                  UAE <br />
                  +971 58 169 4135
                </a>
                <a href="tel:+998773090070" className="text-[#020105] hover:text-yellow-500">
                  Uzbekistan <br />
                  +998 77 309 00 70
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Manzil")}</h4>
              <a target="_blank" href="https://maps.app.goo.gl/tSpST7dYCv745WuE7?g_st=com.google.maps.preview.copy" className="text-[#020105] hover:text-yellow-500">{t("Dubai, United Arab Emirates")}</a>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">{t("Elektron pochta")}</h4>
              <a href="mailto:operations@magical-desert.com" className="text-[#020105] hover:text-yellow-500">operations@magical-desert.com</a>

            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start 2xl:gap-5 gap-3">
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              {t("Bosh sahifa")}
            </a>
            <a href="#services" className="text-[#020105] hover:text-yellow-500">
              {t("Xizmatlar")}
            </a>
            <a href="#reviews" className="text-[#020105] hover:text-yellow-500">
              {t("Foydalanuvchilar fikrlari")}
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start 2xl:gap-5 gap-3">

            <a href="#about" className="text-[#020105] hover:text-yellow-500">
              {t("Biz haqimizda")}
            </a>
            <a href="#mygroup" className="text-[#020105] hover:text-yellow-500">
              {t("MyGroup bron qilish")}
            </a>
            <a href="#contact" className="text-[#020105] hover:text-yellow-500">
              {t("Aloqa")}
            </a>
          </div>

          <div className="flex flex-col sm:py-0 py-6 items-center sm:items-start gap-2">
            <h3 className="font-medium text-[#020105] mb-2">{t("Ijtimoiy tarmoqlar")}</h3>
            <div className="flex gap-6">
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

        </div>

        <div className="flex sm:hidden flex-col items-center mt-6  gap-3">
          <div className="flex  gap-2">
            <div className="flex items-center gap-2"> <Phone className="w-4 h-4" /> UAE</div>
            <a href="tel:+971581694135" className="text-[#020105] hover:text-yellow-500">
              +971 58 169 4135
            </a>
          </div>

          <div className="flex   gap-2">
            <div className="flex items-center gap-2">   <Phone className="w-4 h-4" />  Uzbekistan </div>
            <a href="tel:+998773090070" className="text-[#020105] hover:text-yellow-500">
              +998 77 309 00 70
            </a>
          </div>
        </div>

        <div className="w-full hidden  sm:flex items-center mt-7 justify-between">
          <p className="text-[#9A999B]">{t("© 2025 M Tours. Barcha huquqlar himoyalangan.")}</p>
          <p className="text-[#020105]">{t("Barcha huquqlar himoyalangan")}</p>
        </div>

      </div>
    </footer>
  )
}

