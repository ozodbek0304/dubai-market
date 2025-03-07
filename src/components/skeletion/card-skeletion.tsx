"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function CardSkeleton() {
  return (
    <Card className="w-full  overflow-hidden relative rounded-lg   shadow-lg p-0">
      <div className="relative h-[332px] w-full animate-pulse">
        <Image src="/images/image.png" alt="VIP Event" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20  to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-4 w-full">
        <div className="space-y-2 ">
          <div className="h-5 bg-gray-200 rounded-md w-full animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-md w-4/5 animate-pulse"></div>
        </div>
        </div>
      </div>

    </Card>
  )
}

