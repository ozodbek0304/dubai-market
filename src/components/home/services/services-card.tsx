import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  icon: string;
  title: string
  description: string
  link: string
  commonServices: string[]
}



export default function ServiceCard({ icon, title, description, commonServices }: ServiceCardProps) {
  const { t } = useTranslation();


  return (
    <Card className="h-full shadow-none border-none"
      style={{ boxShadow: "0px 15px 76px 0px #44485B1F" }}
    >
      <CardContent className="pt-0">
        <div className='w-16 h-16 mb-6'>
          <Image priority width={200} height={200} src={icon} alt={t(title)} />
        </div>
        <h1 className="text-lg 2xl:text-xl font-bold mb-3">{t(title)}</h1>
        <p className="text-gray-600 text-sm">{t(description)}</p>
      </CardContent>
      <CardFooter>

        <div className="space-y-2 w-full">
          {commonServices.map((item, index) => (
            <div key={index} className="flex items-center w-full bg-[#F5F5F5] 2xl:p-3 p-2 rounded-[12px]">
              <div className=" max-w-8  min-w-8 max-h-8  min-h-8 rounded-full p-1 mr-2">
                <Image priority src={"/icons/star-trevel.png"} height={30} width={30} alt="star" />
              </div>
              <span className="text-sm">{t(item)}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

