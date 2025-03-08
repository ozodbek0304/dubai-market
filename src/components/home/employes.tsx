"use client"

import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "react-i18next"
import { useGet } from "@/services/https"
import { useEffect } from "react"
import CardSkeleton from "../skeletion/card-skeletion"
import useScreenWidth from "@/hooks/useMedia"

type UserData = {
    id: number;
    name: string;
    description: string;
    avatar: string;
    country: string;
    images: {
        image: string;
        id: number;
    }[];
}


export default function TestimonialSlider() {
    const { t, i18n } = useTranslation();
    const { data, isSuccess, refetch, isLoading } = useGet("comments");
    const isWide = useScreenWidth(1600);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isWide ? 4.5 : 3.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    useEffect(() => {
        refetch();
    }, [i18n.language, refetch]);




    return (
        <section id="reviews" className="w-full overflow-hidden sm:py-16 py-12">

            <h1 className="sm:mb-12 mb-6 font-bold 2xl:text-[48px] lg:text-[36px] text-[24px] max-w-[1000px]  2xl:max-w-7xl mx-auto sm:text-start text-center">{t("Biz haqimizda mijozlar nima deyishadi?")}</h1>
            <Slider {...settings} className="testimonial-slider -mx-2">
                {isSuccess && data?.map((testimonial: UserData) => (
                    <div key={testimonial.id} className="px-2">
                        <div className="bg-white rounded-lg border p-4 h-full">
                            {/* Author Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <Avatar className="h-12 w-12 object-contain">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>JW</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h1 className="font-medium">{testimonial.name}</h1>
                                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.description}</p>

                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-scroll custom-scrollbar w-full">
                                {testimonial.images.map((image, index) => (
                                    <div key={index} className="relative min-w-12 h-12 rounded-md overflow-hidden">
                                        <Image priority
                                            src={image.image || "/placeholder.svg"}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {
                    isLoading && (
                        Array(4).fill(0).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))
                    )
                }


            </Slider>
        </section>
    )
}

