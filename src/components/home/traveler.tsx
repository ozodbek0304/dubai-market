import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useGet } from '@/services/https'


export type UserData = {
    id: number;
    title: string;
    description: string;
    poster: string;
}



function TravelerPages() {
    const { t, i18n } = useTranslation();
    const { push } = useRouter();
    const [hoveredId, setHoveredId] = useState<number>(0);
    const { data: dataTour, isSuccess, refetch } = useGet("tour-example");

    useEffect(() => {
        refetch();
    }, [i18n.language, refetch]);


    return (
        <div className='sm:py-14  py-8 max-w-[1000px]  2xl:max-w-7xl sm:p-0 p-3 mx-auto'>

            <h1 className='sm:mb-12 mb-6 font-bold 2xl:text-[48px] lg:text-[36px] text-[24px] text-center'>{t("Biz sayohatlarini uyushtirgan mashhurlar")}</h1>

            <div className='w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {isSuccess && dataTour?.slice(0, 4)?.map((item: UserData, index: number) => (
                    <Card
                        onClick={() => push("/travel/1")}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(0)}

                        key={index} className={cn("h-[332px] cursor-pointer p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none",
                            (index === 0 || index === 3) ? "lg:col-span-2 col-span-1 row-span-1" : "col-span-1 row-span-1"

                        )}
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, ${item.id === hoveredId ? "0.1" : "0.3"}), rgba(0, 0, 0, ${item.id === hoveredId ? "0.1" : "0.3"})), url(${item.poster})`,
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
                        onClick={() => push("/travel")}
                        className="bg-[#FFD700] cursor-pointer hover:bg-yellow-600 2xl:h-[60px] sm:h-[50px] h-[40px] py-0 px-8 sm:text-[18px] text-sm text-black">{t("Barchasini ko'rish")}</Button>
                </div>
            </div>
        </div>
    )
}

export default TravelerPages