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
    <section id="services" className="py-16 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-start mb-12">Bizning xizmatlarimiz</h2>

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

        <div className="mt-12 text-center">
          <Button className="bg-[#FFD700] cursor-pointer hover:bg-yellow-600 xl:h-[62px] py-0 px-8 text-[18px] text-black">Barcha xizmatlarni ko'rish</Button>
        </div>
      </div>
    </section>
  )
}

