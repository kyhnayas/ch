import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";


const Hero2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const slides = [
        { src: '/images/slider/slide-1.jpg', alt: 'CH Hukuk Bürosu - Slide 1' },
        { src: '/images/slider/slide-2.jpg', alt: 'CH Hukuk Bürosu - Slide 2' },
    ];

    return (

        <section className="hero relative overflow-hidden z-20">
            <div className="hero-slider">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1800}
                    parallax={true}
                    navigation
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {/* Görsel orantılı küçülsün, side crop yok */}
                            <div className="slide-inner slide-bg-image relative w-full">
                                {/* Gerçek img: aspect ratio korunur, sağ/sol crop olmaz */}
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-auto block"
                                    style={{ minHeight: '280px', objectFit: 'cover', objectPosition: 'center top' }}
                                />
                                {/* Karanlık overlay */}
                                <div className="absolute inset-0 bg-black opacity-70 z-10" />
                                {/* İçerik */}
                                <div className="slide absolute inset-0 z-20 flex items-center">
                                    <div className="wraper w-full">
                                        <div className="slide-caption max-w-[700px] px-4">
                                            <p className="text-white text-[20px] font-light col:text-[18px]">
                                                Uzman Hukuk Bürosu
                                            </p>
                                            <h2 className="text-white text-[60px] leading-[90px] lg:text-[42px] lg:leading-[56px] col:text-[22px] col:leading-[32px] font-normal my-[33px] md:my-[20px] sm:my-[14px]">
                                                <span>Adaletiniz İçin</span> <br /> <span>Yanınızdayız.</span>
                                            </h2>
                                            <div className="btns">
                                                <div className="btn-style">
                                                    <Link
                                                        onClick={ClickHandler}
                                                        href="/contact"
                                                        className="bg-[#e5e7eb] relative cursor-pointer text-[16px]
                                                        font-semibold text-white px-[38px] py-[12px] capitalize inline-block mt-[6px]
                                                        transition ease-in-out duration-300 hover:bg-[#d4c291]
                                                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px]
                                                        before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px]
                                                        before:top-[50%] before:bg-white before:transform before:translate-y-[-50%]
                                                        before:transition-all hover:before:left-[-95px] md:before:hidden"
                                                    >
                                                        Hemen Ulaşın
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Hero2;