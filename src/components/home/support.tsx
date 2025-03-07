import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

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

    const { t } = useTranslation();
    return (
        <div className='sm:py-14 py-8 sm:p-0 p-3 mx-auto max-w-[1000px]  2xl:max-w-7xl'>

            <h1 className='sm:mb-12 mb-6 font-bold text-center sm:text-start 2xl:text-[48px] sm:text-[36px] text-[24px]'>{t("Nima uchun bizni tanlashadi?")}</h1>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {data?.map((item, index) => (
                    <Card key={index} className="h-full shadow-[3px 19px 72.5px 0px #0000000F] border-none">
                        <CardContent className="pt-0">
                            <div className='w-16 h-16 mb-6'>
                                <Image priority width={200} height={200} src={item.icon} alt={t(item.title)} />
                            </div>
                            <h1 className="text-xl font-bold mb-3">{t(item.title)}</h1>
                            <p className="text-gray-600 text-sm">{t(item.description)}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>

            <div className="sm:mt-12 mt-8 text-center">
                <a href="#contact" className="inline-flex items-center justify-center bg-[#FFD700] hover:bg-yellow-600 
    2xl:h-[60px] sm:h-[50px] h-[48px] px-8 py-3 text-black rounded-md sm:text-[18px] text-sm">
                    {t("Biz bilan bog'laning")}
                </a>
            </div>

        </div>
    )
}

export default SupportPages