"use client"

import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "react-i18next"

const testimonials = [
    {
        id: 1,
        author: "John Wick",
        date: "Today",
        avatar: "/images/traveler4.png",
        content:
            "Добрый день! Как правило, раннее бронирование стартует за 6 месяцев, так что сейчас вполне уже можно подобрать интересный вариант для отдыха в октябре. На сайте '1001 Тур' Вы можете оставить заявку...",
        images: [
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
            "/about.png",
        ],
    },
    {
        id: 1,
        author: "John Wick",
        date: "Today",
        avatar: "/images/traveler4.png",
        content:
            "Добрый день! Как правило, раннее бронирование стартует за 6 месяцев, так что сейчас вполне уже можно подобрать интересный вариант для отдыха в октябре. На сайте '1001 Тур' Вы можете оставить заявку...",
        images: [
            "/about.png",
            "/about.png",
            "/about.png",
        ],
    },
    {
        id: 1,
        author: "John Wick",
        date: "Today",
        avatar: "/images/traveler4.png",
        content:
            "Добрый день! Как правило, раннее бронирование стартует за 6 месяцев, так что сейчас вполне уже можно подобрать интересный вариант для отдыха в октябре. На сайте '1001 Тур' Вы можете оставить заявку...",
        images: [
            "/about.png",
            "/about.png",
            "/about.png",
        ],
    },
    {
        id: 1,
        author: "John Wick",
        date: "Today",
        avatar: "/images/traveler4.png",
        content:
            "Добрый день! Как правило, раннее бронирование стартует за 6 месяцев, так что сейчас вполне уже можно подобрать интересный вариант для отдыха в октябре. На сайте '1001 Тур' Вы можете оставить заявку...",
        images: [
            "/about.png",
            "/about.png",
            "/about.png",
        ],
    },
]


export default function TestimonialSlider() {

    const { t } = useTranslation();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
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



    return (
        <section id="reviews" className="w-full overflow-hidden py-12">
           
            <h1 className="sm:mb-12 mb-6 font-bold 2xl:text-[48px] lg:text-[36px] text-[24px] max-w-[1000px]  2xl:max-w-7xl mx-auto sm:text-start text-center">{t("Biz haqimizda mijozlar nima deyishadi?")}</h1>
            <Slider {...settings} className="testimonial-slider -mx-2">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="px-2">
                        <div className="bg-white rounded-lg border p-4 h-full">
                            {/* Author Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                                    <AvatarFallback>JW</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-medium">{testimonial.author}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.content}</p>

                            {/* Thumbnails */}
                            <div className="flex gap-2 overflow-x-scroll w-full">
                                {testimonial.images.map((image, index) => (
                                    <div key={index} className="relative min-w-16 h-16 rounded-md overflow-hidden">
                                        <Image priority
                                            src={image || "/placeholder.svg"}
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
            </Slider>
        </section>
    )
}

