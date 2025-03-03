import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  icon: string;
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="pt-0">
        <Image width={64} height={64} className="mb-6" src={icon} alt={title} />
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={link} className="text-[#BB9E00]  border-b border-b-[#BB9E00] hover:text-yellow-600 font-medium text-md">
          Batafsil
        </Link>
      </CardFooter>
    </Card>
  )
}

