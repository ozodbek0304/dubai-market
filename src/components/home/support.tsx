import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import Head from 'next/head'

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
             <Head>
                <title>{t("Nima uchun bizni tanlashadi?")}</title>
            </Head>
            <h1 className='sm:mb-12 mb-6 font-bold text-center sm:text-start 2xl:text-[48px] sm:text-[36px] text-[24px]'>{t("Nima uchun bizni tanlashadi?")}</h1>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {data?.map((item, index) => (
                    <Card key={index} className="h-full shadow-[3px 19px 72.5px 0px #0000000F] border-none">
                        <CardContent className="pt-0">
                            <Image priority width={64} height={64} className="mb-6" src={item.icon} alt={t(item.title)} />
                            <h3 className="text-xl font-bold mb-3">{t(item.title)}</h3>
                            <p className="text-gray-600 text-sm">{t(item.description)}</p>
                        </CardContent>
                    </Card>
                ))
                }
            </div>

            <div className="sm:mt-12 mt-8 text-center">
                <Button className="bg-[#FFD700] cursor-pointer hover:bg-yellow-600 2xl:h-[60px] sm:h-[50px] h-[40px] py-0 px-8 sm:text-[18px] text-sm text-black">{t("Biz bilan bog'laning")}</Button>
            </div>
        </div>
    )
}

export default SupportPages