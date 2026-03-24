
import React from 'react'
import Link from "next/link";
import Cases from '../../api/case';
import Image from 'next/image';

const CaseStudies = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="py-[100px] md:py-[70px] sm:py-[50px] col:py-[40px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px] md:mb-[45px] sm:mb-[30px] col:mb-[20px]">
                        <span className="text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] text-[#666666]">Örnek Çalışmalarımız</span>
                        <h2 className=" text-[36px] md:text-[28px] sm:text-[24px] col:text-[20px] font-medium text-[#333] pb-[20px] md:pb-[15px] sm:pb-[12px] col:pb-[10px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] md:before:w-[50px] sm:before:w-[40px] before:h-[3px] before:bg-[#e5e7eb]">Son Emsal Kararlar</h2>
                    </div>
                </div>
            </div>
            <div className="sortable-gallery overflow-hidden ">
                <div className="gallery-container gallery-fancybox masonry-gallery flex flex-wrap">
                    {Cases.slice(0, 5).map((cases, i) => (
                        <div className="basis-1/5 md:basis-1/3 sm:basis-1/2 col:basis-full overflow-hidden grid-item" key={i}>
                            <div className="relative group">
                                <div className="studies-single">
                                    <Image className="w-full" src={cases.cImg} alt="" />
                                </div>
                                <div className="absolute bottom-[-80px] md:bottom-[-60px] sm:bottom-[-50px] col:bottom-[-40px] bg-[#111111cc] w-[calc(100%)] h-[calc(100%)] transition ease-in-out duration-500 opacity-0 invisible 
                               group-hover:opacity-100 group-hover:visible group-hover:bottom-0">
                                    <div className="absolute left-[5%] top-[5%] w-[90%] h-[90%] text-center border-[2px] border-[#e5e7eb] z-10 flex justify-center flex-col">
                                        <p className="text-[#e5e7eb] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] leading-[28px] md:leading-[22px] sm:leading-[18px] col:leading-[16px]">{cases.sub}</p>
                                        <h3 className="relative text-white text-[22px] md:text-[18px] sm:text-[16px] col:text-[14px] pt-[10px] md:pt-[8px] sm:pt-[6px] col:pt-[5px] pb-[25px] md:pb-[18px] sm:pb-[12px] col:pb-[8px] font-medium 
                                    before:absolute before:left-[50%] before:top-full before:content-[''] before:bg-[#e5e7eb] before:transform before:-translate-x-1/2
                                    before:w-[60px] md:before:w-[50px] sm:before:w-[40px] before:h-[3px] before:z-10">
                                            <Link onClick={ClickHandler} href="/case-single/[slug]" as={`/case-single/${cases.slug}`} className="text-white transition ease-in-out duration-300 hover:text-[#e5e7eb]">{cases.cTitle}</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;