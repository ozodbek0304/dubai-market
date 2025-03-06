import Link from "next/link"
import ServiceCard from "../home/services/services-card"
import { services } from "../home/services/services"
import { useTranslation } from "react-i18next";
import Head from "next/head";

export default function ServicesPage() {
  const { t } = useTranslation();

    return (
        <div className="max-w-[1000px] 2xl:max-w-7xl pt-28 mx-auto sm:px-0 px-3">
            <Head>
                <title>{t("Bizning xizmatlarimiz")}</title>
            </Head>
            {/* Breadcrumb */}
            <div className="pt-3 text-sm text-center">
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                    {t("Bosh sahifa")}
                </Link>
                <span className="text-gray-500"> / {t("Bizning xizmatlarimiz")}</span>
            </div>


            {/* Page title */}
            <h1 className="2xl:text-[48px] sm:text-[36px] text-[28px] font-bold text-center mb-6">{t("Bizning xizmatlarimiz")}</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        link={service.link}
                        commonServices={service.commonServices}
                    />
                ))}
            </div>
        </div>
    )
}

