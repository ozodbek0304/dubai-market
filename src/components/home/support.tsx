import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'

const data = [
    {
        title: "24/7 qo‘llab-quvvatlash",
        icon: "/icons/clock.png",
        description: "Biz har doim sizning xizmatimizdamiz — kunu tun aloqa qilishingiz mumkin."
    },
    {
        title: "VIP xizmatlar va maxsus yondashuv",
        icon: "/icons/Ticket (2).png",
        description: "Har bir mijozga individual xizmat ko‘rsatamiz."
    },
    {
        title: "Eng yaxshi narxlar kafolati",
        icon: "/icons/money.png",
        description: "Biz sifatli xizmatlarni eng yaxshi narxlarda taklif qilamiz"
    }, {
        title: "Eksklyuziv takliflar va sherikliklar",
        icon: "/icons/olmos.png",
        description: "Bizning hamkorlarimiz — Dubaydagi eng yaxshi mehmonxonalar va restoranlar"
    },
]

function SupportPages() {
    return (
        <div className='py-14 container mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='mb-12 font-medium text-[48px]'>Nima uchun bizni tanlashadi?</h1>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {data?.map((item, index) => (
                    <Card key={index} className="h-full shadow-[3px 19px 72.5px 0px #0000000F] border-none">
                        <CardContent className="pt-0">
                            <Image width={64} height={64} className="mb-6" src={item.icon} alt={item.title} />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>

            <div className='w-full flex justify-center mt-12'>
                <Button className=" mt-6 px-8 bg-[#FFD700] hover:bg-[#FFD700]/90 cursor-pointer text-black font-medium  rounded-lg h-[60px]">
                    Biz bilan bog'laning
                </Button>
            </div>
        </div>
    )
}

export default SupportPages