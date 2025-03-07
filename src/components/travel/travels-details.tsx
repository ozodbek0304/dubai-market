import Link from "next/link"
import { Card } from "../ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import Head from "next/head"
import { useGet } from "@/services/https"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { UserData } from "../home/traveler"


const services = [
    "Iman Gadzhi bilan shaxsiy kechki tushlik",
    "Iman Gadzhi bilan Bizness-meeting",
    "Dubai bo'ylab hashamatli VIP sayohat",
    "Maxsus biznes tarmoq'i qurish",
    "Iman Gadzhi bilan shaxsiy murabbiyllik seansi",
]




export default function TravelsDetailsPages() {
    const { t, i18n } = useTranslation();
    const { query } = useRouter();

    const { data: dataTour, isSuccess: successTour, refetch: refetchTour } = useGet(`tour-example`, {
        options: { enabled: Boolean(query.pid) }
    });
    const { data, isLoading, refetch } = useGet(`tour-example/${query.pid}`, {
        options: { enabled: Boolean(query.pid) }
    });



    useEffect(() => {
        if (query?.pid) {
            refetchTour();
            refetch();
        }
    }, [i18n.language, refetch]);


    return (
        <div className="max-w-[1000px] 2xl:max-w-7xl pt-28 mx-auto lg:px-0 px-3">
            <Head>
                <title>{t("Biz sayohatlarini uyushtirgan mashhurlar")}</title>
            </Head>
            {/* Breadcrumb */}
            <div className="py-3 text-sm text-center">
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                    {t("Bosh sahifa")}
                </Link>
                <span className="text-gray-500"> / {t("Biz sayohatlarini uyushtirgan mashhurlar")}</span>
            </div>


            <div className='w-full grid gap-5 grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 '>
                {data?.images?.map((item: { image: string }, index: number) => (
                    <Card key={index} className={cn("p-0 bg-no-repeat bg-cover  shadow-[3px 19px 72.5px 0px #0000000F] border-none",
                        index === 0 ? "col-span-4  sm:h-[440px] h-[300px]" : "md:col-span-2 col-span-4 h-[300px]"
                    )

                    }
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${item.image})`,
                            backgroundPosition: "center"
                        }}
                    >
                    </Card>
                ))
                }
                {
                    isLoading && <div className="col-span-4">
                        <Card className="w-full  overflow-hidden   rounded-lg border-none   shadow-none p-0">
                            <div className="relative h-[332px] w-full animate-pulse">
                                <Image src="/images/image.png" alt="VIP Event" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20  to-transparent"></div>

                            </div>
                            <div className="space-y-2 ">
                                <div className="h-5 bg-gray-200 rounded-md w-4/5 animate-pulse"></div>
                                {
                                    Array(4).fill(0).map((_, index) => (
                                        <div key={index} className="h-5 bg-gray-200 rounded-md w-full animate-pulse"></div>
                                    ))
                                }
                            </div>

                        </Card>
                    </div>
                }
            </div>

            <div className="py-5 space-y-3">
                <h1 className="2xl:text-[48px] font-bold sm:text-[36px] text-[28px]">{data?.title}</h1>

                <p>{data?.description}</p>
            </div>

            <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("Biz uyushtirgan xizmatlar")}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {successTour && dataTour.map((service: UserData, index: number) => (
                        <div
                            key={index}
                            className={`p-4 bg-[#FEFCE3] rounded-lg flex items-center gap-3 ${index === services.length - 1 ? "md:col-span-2" : ""
                                }`}
                        >
                            <Image priority src={"/icons/star-trevel.png"} width={30} height={30} alt="star-icon" />
                            <span className="text-gray-800">{service.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

