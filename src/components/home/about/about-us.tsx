import { User, Star, Plane } from "lucide-react"
import Image from "next/image"


const data = [
  {
    id: 1,
    title: "100+ VIP mijozlar",
    icon: "/icons/user.png",
  },
  {
    id: 2,
    title: "100+ VIP mijozlar",
    icon: "/icons/operation.png",
  },
  {
    id: 3,
    title: "4+ yillik tajriba",
    icon: "/icons/star.png",
  }
]

export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch ">
          <div className="bg-[#F5F5F5] p-12 rounded-[32px] h-full">
            <h2 className="text-3xl font-bold mb-6">Biz Haqimizda</h2>
            <p className="text-gray-600 mb-8">
              Biz BAAda rasmiy ro‘yxatdan o‘tgan Tourizm kompaniyamiz. Dubayda VIP sayohatlar bilan bir qatorda har qanday mijozlar uchun ham turli xil sayohat va ekskursiya xizmatlarini taqdim etamiz. Bizning maqsadimiz – har bir mehmonimizga hashamat, qulaylik va shaxsiy yondashuvni taklif qilishdir. Shuningdek, barcha xizmatlarimiz uchun raqobatbardosh narxlarni taqdim etamiz. Har bir sayohatingizni unutilmas tajribaga aylantirish uchun biz bilan Bog'laning!
            </p>

            <div className="flex flex-col gap-[21px]">

              {
                data?.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
                      <Image width={54} height={54} src={item.icon} alt={item?.title} />
                    </div>
                    <span className="text-2xl font-semibold">{item?.title}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="relative max-h-[670px] rounded-[32px] overflow-hidden shadow-xl">
            <img
              src="about.png"
              alt="Dubai skyline view from a luxury apartment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

