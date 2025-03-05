import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

const data = [
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler1.png",
        description: "📍 Dubai, Marina Beach Resort",
    },
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler2.png",
        description: "📍 Dubai, Marina Beach Resort",
    },
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler3.png",
        description: "📍 Dubai, Marina Beach Resort",
    },
]

const services = [
    "Iman Gadzhi bilan shaxsiy kechki tushlik",
    "Iman Gadzhi bilan Bizness-meeting",
    "Dubai bo'ylab hashamatli VIP sayohat",
    "Maxsus biznes tarmoq'i qurish",
    "Iman Gadzhi bilan shaxsiy murabbiyllik seansi",
  ]
export default function TravelsDetailsPages() {


    return (
        <div className="max-w-[1000px] 2xl:max-w-7xl pt-28 mx-auto lg:px-0 px-3">
            {/* Breadcrumb */}
            <div className="py-3 text-sm text-center">
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Asosiy sahifa
                </Link>
                <span className="text-gray-500"> / Biz sayohatlarini uyushtirgan mashhurlar</span>
            </div>


            <div className='w-full grid gap-5 grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 '>
                {data?.map((item, index) => (
                    <Card key={index} className={cn("p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none",
                        index === 0 ? "col-span-4  sm:h-[440px] h-[300px]" : "md:col-span-2 col-span-4 h-[300px]"
                    )

                    }
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${item.icon})`,
                            backgroundPosition: "center"
                        }}
                    >
                        <CardContent className="p-4 flex flex-col h-full justify-end">
                            <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                            <p className="text-white text-md">{item.description}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>
            <div className="py-5 space-y-3">
                <h1 className="2xl:text-[48px] font-bold sm:text-[36px] text-[28px]">Millianer Iman Gadzhi bilan Dubayda VIP tushlik</h1>

                <p>M tours da biz eng yuqori darajadagi mijozlarimizga, raqamli marketing va biznes sohasida eng ta’sirli shaxslardan biri bo'lgan Iman Gadzhi bilan Dubai shahrida bir martalik noyob imkoniyatni taqdim etishdan faxrlanamiz. Ushbu maxsus VIP paketining bir qismi sifatida biz hashamat, shaxsiy murabbiylik va unutilmas tajribalarni birlashtirib, sizga abadiy taassurot qoldiradigan sayohatni tashkil etdik.</p>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Biz uyushtirgan xizmatlar</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-4 bg-[#FEFCE3] rounded-lg flex items-center gap-3 ${index === services.length - 1 ? "md:col-span-2" : ""
                                }`}
                        >
                            <Image src={"/icons/star-trevel.png"} width={30} height={30} alt="star-icon" />
                            <span className="text-gray-800">{service}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

