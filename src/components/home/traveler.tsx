import React from 'react'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'



const data = [
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler1.png",
        description: "📍 Dubai, Marina Beach Resort",
        col: "lg:col-span-2 col-span-1 row-span-1"
    },
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler2.png",
        description: "📍 Dubai, Marina Beach Resort",
        col: "col-span-1 row-span-1"
    },
    {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler3.png",
        description: "📍 Dubai, Marina Beach Resort",
        col: "col-span-1 row-span-1"
    }, {
        title: "Millianer Iman Gadzhi bilan Dubayda VIP tushlik",
        icon: "/images/traveler4.png",
        description: "📍 Dubai, Marina Beach Resort",
        col: "lg:col-span-2 col-span-1 row-span-1"
    },
]



function TravelerPages() {
    const { t } = useTranslation();

    const router = useRouter();

    return (
        <div className='sm:py-14  py-8 max-w-[1000px]  2xl:max-w-7xl sm:p-0 p-3 mx-auto'>
            <Head>
                <title>{t("Biz sayohatlarini uyushtirgan mashhurlar")}</title>
            </Head>
            <h1 className='sm:mb-12 mb-6 font-bold 2xl:text-[48px] lg:text-[36px] text-[24px] text-center'>{t("Biz sayohatlarini uyushtirgan mashhurlar")}</h1>

            <div className='w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {data?.map((item, index) => (
                    <Card key={index} className={cn("h-[332px] p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none", item.col)}
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${item.icon})`,
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

            <div className='w-full flex justify-center sm:mt-12 mt-4'>
                <div className="sm:mt-12 mt-8 text-center">
                    <Button
                        onClick={() => router.push("/travel")}
                        className="bg-[#FFD700] cursor-pointer hover:bg-yellow-600 2xl:h-[60px] sm:h-[50px] h-[40px] py-0 px-8 sm:text-[18px] text-sm text-black">{t("Barchasini ko'rish")}</Button>
                </div>
            </div>
        </div>
    )
}

export default TravelerPages