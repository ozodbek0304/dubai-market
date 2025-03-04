"use client"
import { Instagram, Phone, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="border-t bg-[#F5F7FA] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-9">
            <div>
              <h4 className="text-[#5D5D5F] mb-2">Telefon</h4>
              <a href="tel:+998901682272" className="text-[#020105] hover:text-yellow-500">+998 90 168 22 72</a>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">Адрес</h4>
              <a href="#" className="text-[#020105] hover:text-yellow-500">Dubai, United Arab Emirates</a>
            </div>

            <div>
              <h4 className="text-[#5D5D5F] mb-2">Электронная почта</h4>
              <a href="mailto:contact@mtoursdubai.com<" className="text-[#020105] hover:text-yellow-500">Dubai, United Arab Emirates</a>

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              Bosh sahifa
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              Xizmatlar
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              Foydalanuvchilar fikrlari
            </a>
          </div>

          <div className="flex flex-col gap-5">

            <a href="#" className="text-[#020105] hover:text-yellow-500">
              Biz haqimizda
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              MyGroup bron qilish
            </a>
            <a href="#" className="text-[#020105] hover:text-yellow-500">
              Aloqa
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-[#020105] mb-2">Social media</h3>
            <div className="flex gap-4">
              <a href="#" >
                <Image height={40} width={40} alt="instagram" src={"/icons/instagram.png"} />
              </a>
              <a href="#" >
              <Image height={40} width={40} alt="telegram" src={"/icons/telegram.png"} />
              </a>
              <a href="#" >
              <Image height={40} width={40} alt="phone" src={"/icons/phone.png"} />
              </a>
            </div>
          </div>

        </div>

        <div className="w-full flex items-center mt-7 justify-between">
          <p className="text-[#9A999B]">© 2025 M Tours. Barcha huquqlar himoyalangan.</p>
          <p className="text-[#020105]">All rights reserved</p>
        </div>

      </div>
    </footer>
  )
}

