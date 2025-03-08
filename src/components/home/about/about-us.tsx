import Image from "next/image"
import { useTranslation } from "react-i18next";


const data = [
  {
    id: 1,
    title: "100+ VIP mijozlar",
    icon: "/icons/user.png",
  },
  {
    id: 2,
    title: "500+ oila va individual mijozlar",
    icon: "/icons/operation.png",
  },
  {
    id: 3,
    title: "6+ yillik tajriba",
    icon: "/icons/star.png",
  }
]


export default function AboutUs() {

  const { t } = useTranslation();

  return (
    <section id="about" className="sm:py-16 py-8  ">

      <div className="2xl:max-w-7xl max-w-[1000px]  mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch  ">
          <div className="bg-[#F5F5F5] sm:p-12 p-3 rounded-[32px] h-full">
            <h2 className="sm:text-3xl text-2xl font-bold sm:mb-6 mb-3 sm:text-start text-center">{t("Biz Haqimizda")}</h2>
            <p className="text-gray-600 text-sm mb-8">
              {t("Biz BAAda rasmiy ro‘yxatdan o‘tgan Tourizm kompaniyamiz. Dubayda VIP sayohatlar bilan bir qatorda har qanday mijozlar uchun ham turli xil sayohat va ekskursiya xizmatlarini taqdim etamiz. Bizning maqsadimiz – har bir mehmonimizga hashamat, qulaylik va shaxsiy yondashuvni taklif qilishdir. Shuningdek, barcha xizmatlarimiz uchun raqobatbardosh narxlarni taqdim etamiz. Har bir sayohatingizni unutilmas tajribaga aylantirish uchun biz bilan Bog'laning!")}
            </p>

            <div className="flex flex-col gap-[21px]">

              {
                data?.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-12 2xl:w-16 h-12 2xl:h-16 bg-white rounded-md flex items-center justify-center">
                      <Image priority width={100} height={100} src={item.icon} alt={t(item?.title)} />
                    </div>
                    <span className="sm:text-2xl text-xl font-semibold">{t(item?.title)}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="relative max-h-[670px] rounded-[32px] overflow-hidden shadow-xl">
            <Image
              width={588}
              height={670}
              src="/about.jpg"
              alt="Dubai skyline view from a luxury apartment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

