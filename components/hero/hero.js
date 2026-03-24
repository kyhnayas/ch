import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";


const Hero = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const slides = [
        '/images/slider/slide-4.jpg',
        '/images/slider/slide-5.jpg'
    ];

    return (

        <section className="hero relative h-[790px] lg:h-[600px] md:h-[500px] sm:h-[400px] col:h-[350px] overflow-hidden z-20 w-full">
            <div className="hero-slider w-full h-full">
                <Swiper
                    // install Swiper modules
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
                            <div className="slide-inner slide-bg-image w-full h-[790px] lg:h-[600px] md:h-[500px] sm:h-[400px] col:h-[350px] bg-cover bg-no-repeat bg-center relative overflow-hidden" style={{ backgroundImage: `url(${slide})` }}>
                                <div className="absolute inset-0 w-full h-full bg-black/70 z-10"></div>
                                <div className="absolute inset-0 flex items-center z-20 w-full h-full">
                                    <div className="w-full px-[60px] lg:px-[80px] md:px-[40px] sm:px-[20px] col:px-[15px]">
                                        <div className="slide-caption w-full lg:w-[75%] max-w-3xl">
                                            <p className="text-white text-[20px] md:text-[18px] sm:text-[16px] col:text-[14px] font-light mb-[20px] md:mb-[15px] sm:mb-[12px]">{props.data?.heroSubtitle || "CH HUKUK BÜROSU"}</p>
                                            <h2 className="text-white text-[68px] md:text-[48px] sm:text-[36px] col:text-[28px] leading-[1.25] lg:leading-[1.3] font-normal mb-[28px] md:mb-[20px] sm:mb-[16px] col:mb-[12px] break-words hyphens-auto" dangerouslySetInnerHTML={{ __html: props.data?.heroTitle || "<span>Hukuki Süreçlerinizde Güvenilir Ekibiniz</span>" }}></h2>
                                            <p className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] mb-[40px] md:mb-[30px] sm:mb-[20px] col:mb-[15px] leading-[1.7] md:leading-[1.6]">{props.data?.heroDescription || "Alanında uzman 5 avukatımızla (2 ortak, 3 çalışan) yanınızdayız."}</p>
                                            <div className="btns">
                                                <Link onClick={ClickHandler} href="/contact" className="bg-[#e5e7eb] text-black relative cursor-pointer text-[16px] md:text-[15px] sm:text-[14px] col:text-[13px] font-semibold px-[40px] md:px-[32px] sm:px-[24px] col:px-[18px] py-[14px] md:py-[11px] sm:py-[9px] col:py-[7px] capitalize inline-block hover:bg-[#d4c291] transition-all duration-300 before:absolute before:content-[''] before:w-[90px] sm:before:w-[65px] col:before:w-[50px] before:h-[2px] before:bg-white before:left-[-70px] sm:before:left-[-50px] col:before:left-[-40px] before:top-[50%] before:transform before:translate-y-[-50%] before:transition-all hover:before:left-[-110px] sm:hover:before:left-[-80px] col:hover:before:left-[-65px] md:before:hidden">{props.data?.heroBtnText || "İletişime Geçin"}</Link>
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

export default Hero;