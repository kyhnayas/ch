import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial/2.png'
import ts2 from '/public/images/testimonial/2.png'

import tright from '/public/images/testimonial/1.png'
import Image from "next/image";


const Testimonial = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    const testimonial = [
        {
            tsImg: ts1,
            Des: "“Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.”",
            Title: 'Milani Harverd',
            Sub: "CEO Of GRK Egency",
        },
        {
            tsImg: ts2,
            Des: "“Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.”",
            Title: 'Aliza Anney',
            Sub: "Model Belarus",
        }
    ]
    return (

        <section className={`relative ${props.tClass}`}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 sm:order-2">
                        <div className="testimonial-img sm:text-center sm:max-w-[70%] md:max-w-[100%] sm:mx-auto">
                            <Image src={tright} alt="" />
                        </div>
                    </div>
                    <div className="col-span-8 md:col-span-6 sm:col-span-12 sm:order-1">
                        <div className="testimonial-text ml-[95px] md:ml-[30px] sm:ml-0 mt-[50px] md:mt-[30px] sm:mt-[20px]">
                            <div className="text-left sm:text-center">
                                <span className="text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] text-[#666666]">Hakkımızda Neler Söylediler?</span>
                                <h2 className="text-[36px] md:text-[28px] sm:text-[24px] col:text-[20px] font-medium text-[#333] pb-[20px] md:pb-[15px] sm:pb-[12px] col:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] md:before:left-[-40px] sm:before:hidden
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] md:before:w-[40px] before:h-[1px] before:bg-[#e5e7eb] md:before:hidden">Müvekkil Yorumları</h2>
                            </div>
                            <div className="testimonial-slide owl-carousel">
                                <Slider {...settings}>
                                    {testimonial.map((tesmnl, tsm) => (
                                        <div className="slide-item sm:text-center" key={tsm}>
                                            <p className="relative pt-[30px] sm:p-0 md:pt-[20px] z-10 sm:pl-[20px] col:pl-[15px] pl-[33px] pb-[30px] md:pb-[20px] sm:pb-[15px] col:pb-[12px] pr-[50px] md:pr-[30px] sm:pr-[20px] col:pr-[15px] mb-[20px] md:mb-[15px] sm:mb-[10px] col:mb-[8px] before:absolute before:left-[4px] before:top-[5px] before:content-['\f10d'] before:-z-10 before:font-['FontAwesome'] before:text-[#e5e7eb] before:text-[30px] md:before:text-[24px] sm:before:text-[16px] col:before:text-[12px] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] leading-[1.6]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                                            <div className="w-[18%] md:w-[22%] sm:w-[30%] col:w-[35%] rounded-[50%] float-left sm:float-none sm:mx-auto pr-[20px] md:pr-[15px] sm:pr-0">
                                                <Image src={tesmnl.tsImg} alt="" />
                                            </div>
                                            <div className="mt-[35px] md:mt-[25px] sm:mt-[15px] col:mt-[12px] sm:mb-[30px] md:mb-[20px] sm:mb-[15px]">
                                                <h4 className="text-[18px] md:text-[16px] sm:text-[14px] col:text-[13px] font-semibold font-base-font">{tesmnl.Title}</h4>
                                                <span className="text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] text-[#666]">{tesmnl.Sub}</span>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;