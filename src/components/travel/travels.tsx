import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/router"
import Head from "next/head"
import { useTranslation } from "react-i18next"
import { useState } from "react"

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
    }, {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler4.png",
        description: "📍 Dubai, Marina Beach Resort",
    },
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
]
export default function TravelsPages() {
    const { push } = useRouter();
    const { t } = useTranslation();
    const [hoveredId, setHoveredId] = useState<string>("");


    return (
        <div className="max-w-[1000px] 2xl:max-w-7xl pt-28 mx-auto sm:px-0 px-3">
            <Head>
                <title>{t("Biz sayohatlarini uyushtirgan mashhurlar")}</title>
            </Head>
            {/* Breadcrumb */}
            <div className="pt-3 text-sm text-center">
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                    {t("Bosh sahifa")}
                </Link>
                <span className="text-gray-500"> / {t("Biz sayohatlarini uyushtirgan mashhurlar")}</span>
            </div>


            {/* Page title */}
            <h1 className="2xl:text-[48px] sm:text-[36px] text-[28px] font-bold text-center mb-6">{t("Biz sayohatlarini uyushtirgan mashhurlar")}</h1>


            <div className='w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                {data?.map((item, index) => (
                    <Card
                        onClick={() => push("/travel/1")}
                        onMouseEnter={() => setHoveredId(item.icon)}
                        onMouseLeave={() => setHoveredId("")}
                        key={index} className={cn("h-[332px] cursor-pointer p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none")}
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, ${item.icon === hoveredId ? "0.1" : "0.3"}), rgba(0, 0, 0, ${item.icon === hoveredId ? "0.1" : "0.3"})), url(${item.icon})`,
                            backgroundPosition: "center"
                        }}
                    >
                        <CardContent className="p-4 flex flex-col h-full justify-end">
                            <h3 className="text-xl text-white font-bold mb-2">{t(item.title)}</h3>
                            <p className="text-white text-md">{t(item.description)}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>
        </div>
    )
}

