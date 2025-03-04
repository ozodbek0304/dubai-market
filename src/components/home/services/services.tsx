import { Button } from "@/components/ui/button"
import ServiceCard from "./services-card"

export default function Services() {

  const services = [
    {
      icon: "/icons/Ticket.png",
      title: "Ekskursiyalar va Diqqatga sazovor joylar chiptalari.",
      description: "Akvaparklar, avtobus sayohatlari va boshqa Dubay sarguzashtlar",
      link: "/services/excursions",
    },
    {
      icon: "/icons/car.png",
      title: "Transport Xizmatlari",
      description: "Aeroportdan va shahar ichida VIP hamda guruh mijozlar uchun qulay transfer xizmatlari.",
      link: "/services/transport",
    },
    {
      icon: "/icons/unber.png",
      title: "MyGroup",
      description: "Korporativ dam olish: restoranlar, yaxtalar va mehmonxonalar",
      link: "/services/groups",
    },
    {
      icon: "/icons/Ticket (2).png",
      title: "VIP Konsyerj",
      description: "Dubaydagi har qanday istaklar uchun eksklyuziv xizmat.",
      link: "/services/concierge",
    },
    {
      icon: "/icons/Camping.png",
      title: "Ko'chmas Mulk",
      description: "Dubayda ko‘chmas mulk xarid qilishingizga yordam beramiz: kvartiralar, villalar, ofislar.",
      link: "/services/realestate",
    },
    {
      icon: "/icons/Airplane.png",
      title: "Tur Paketlar",
      description: "Shaxsiy mijozlar uchun Dubay bo‘ylab maxsus sayohatlar.",
      link: "/services/tours",
    },
  ]

  return (
    <section id="services" className="sm:py-16 py-4 bg-[#F5F7FA] sm:rounded-[64px] sm:p-5 p-3 rounded-2xl">
      <div className="2xl:max-w-7xl max-w-[1000px]  mx-auto">
        <h2 className="sm:text-3xl text-2xl font-bold text-center sm:text-start sm:mb-12 mb-4">Bizning xizmatlarimiz</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="sm:mt-12 mt-8 text-center">
          <Button className="bg-[#FFD700] cursor-pointer hover:bg-yellow-600 2xl:h-[60px] sm:h-[50px] h-[40px] py-0 px-8 sm:text-[18px] text-sm text-black">Barcha xizmatlarni ko'rish</Button>
        </div>
      </div>
    </section>
  )
}

