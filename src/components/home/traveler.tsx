import React from 'react'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'



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
    return (
        <div className='py-14 container mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='mb-12 font-medium text-[48px] text-center'>Biz sayohatlarini uyushtirgan mashhurlar</h1>

            <div className='w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {data?.map((item, index) => (
                    <Card key={index} className={cn("h-[332px] p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none", item.col)}
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

           <div className='w-full flex justify-center mt-12'>
           <Button className=" mt-6 px-8 bg-[#FFD700] hover:bg-[#FFD700]/90 cursor-pointer text-black font-medium  rounded-lg h-[60px]">
                Barchasini ko'rish
            </Button>
           </div>
        </div>
    )
}

export default TravelerPages