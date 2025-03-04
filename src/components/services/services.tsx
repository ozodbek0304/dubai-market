import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function ServicesPage() {
    // Data for service cards
    const servicesData = [
        {
            id: 1,
            icon: "/icons/Airplane.png",
            title: "Ekskursiyalar va Diqqatga sazovor joylar chiptalar.",
            description: "Akvaparklar, avtobus sayohatlari va boshqa Dubay sarguzashtlar",
        },
        {
            id: 2,
            icon: "/icons/Airplane.png",
            title: "VIP Konsijer",
            description: "Dubaydag'i har qanday istaklar uchun eksklyuziv xizmat.",
        },
        {
            id: 3,
            icon: "/icons/Airplane.png",
            title: "VIP Konsijer",
            description: "Dubaydag'i har qanday istaklar uchun eksklyuziv xizmat.",
        },
        {
            id: 4,
            icon: "/icons/Airplane.png",
            title: "Tur Paketlar",
            description: "Shaxsiy mijozlar uchun Dubay bo'ylab maxsus sayohatlar.",
        },
        {
            id: 5,
            icon: "/icons/Airplane.png",
            title: "MyGroup",
            description: "Korporativ dam olish: restoranlar, yaxtilar va mehmonxonalar",
        },
        {
            id: 6,
            icon: "/icons/Airplane.png",
            title: "Transport Xizmatlari",
            description: "Aeroportdan va shahar ichida VIP hamda guruh mijozlari uchun qulay transfer xizmatlari.",
        },
        {
            id: 7,
            icon: "/icons/Airplane.png",
            title: "Ko'chmas Mulk",
            description: "Dubayda ko'chmas mulk xarid qilishingizga yordam beramiz: kvartiralar, villalar, ofislar.",
        },
    ]

    // Common services for all cards
    const commonServices = [
        "Shaxsiy Konsiyerj Xizmatlari:",
        "Maxsus Transport Va Chauffeur Xizmat:",
        "Maxsus Sayohatlar:",
    ]

    return (
        <div className="container pt-28 mx-auto px-4">
            {/* Breadcrumb */}
            <div className="pt-3 text-sm text-center">
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                </Link>
                <span className="text-gray-500"> / Bizning xizmatlarimiz</span>
            </div>


            {/* Page title */}
            <h1 className="text-[48px] font-bold text-center mb-6">Bizning xizmatlarimiz</h1>


            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6">
                {/* Map through services data */}
                {servicesData.map((service) => (
                    <div key={service.id} className="bg-white rounded-[32px] shadow-none p-8"
                        style={{ boxShadow: "0px 15px 76px 0px #44485B1F" }}
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src={service.icon || "/placeholder.svg"}
                                alt={`${service.title} icon`}
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                        <p className="text-sm mb-4">{service.description}</p>

                        <div className="space-y-2">
                            {commonServices.map((item, index) => (
                                <div key={index} className="flex items-center bg-[#F5F5F5] p-3 rounded-[12px]">
                                    <span className="bg-green-100 rounded-full p-1 mr-2">
                                        <Check className="h-4 w-4 text-green-600" />
                                    </span>
                                    <span className="text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

