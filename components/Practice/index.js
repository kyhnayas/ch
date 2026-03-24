import React from 'react';
import Link from "next/link";;
import Practices from '../../api/Practices';


const Practice = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="bg-[#f5f5f5] pt-[95px] md:pt-[70px] sm:pt-[50px] col:pt-[40px] pb-[70px] md:pb-[50px] sm:pb-[40px] col:pb-[30px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px] md:mb-[45px] sm:mb-[30px] col:mb-[20px]">
                        <span className="text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] text-[#666666]">Çalışma Alanlarımız</span>
                        <h2 className=" text-[36px] md:text-[28px] sm:text-[24px] col:text-[20px] font-medium text-[#333] pb-[20px] md:pb-[15px] sm:pb-[12px] col:pb-[10px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] md:before:w-[50px] sm:before:w-[40px] before:h-[3px] before:bg-[#e5e7eb]">Size Nasıl Yardımcı Olabiliriz?</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {Practices.map((practice, Pitem) => (
                        <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5 md:mb-4 sm:mb-3" key={Pitem}>
                            <div className="group flex sm:mx-[30px] md:mx-[15px] col:mx-0">
                                <div className="h-[80px] md:h-[70px] sm:h-[60px] col:h-[50px] w-[80px] md:w-[70px] sm:w-[60px] col:w-[50px] flex-shrink-0">
                                    <div className="h-[80px] md:h-[70px] sm:h-[60px] col:h-[50px] w-[80px] md:w-[70px] sm:w-[60px] col:w-[50px] leading-[75px] md:leading-[65px] sm:leading-[55px] col:leading-[45px] border border-[#cccccc] rounded-[50%] text-center flex items-center justify-center">
                                        <i className={`fi ${practice.icon} text-[50px] md:text-[40px] sm:text-[35px] col:text-[28px] transition-all text-[#666666] group-hover:text-[#111111]`}></i>
                                    </div>
                                </div>
                                <div className="pl-[24px] md:pl-[16px] sm:pl-[12px] col:pl-[8px]">
                                    <h3 className="text-[#373737] text-[24px] md:text-[20px] sm:text-[18px] col:text-[16px] font-medium pb-[10px] md:pb-[8px] sm:pb-[6px] col:pb-[5px] relative mb-[10px] md:mb-[8px] sm:mb-[6px] col:mb-[5px]
                            before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] md:before:w-[25px] sm:before:w-[20px] before:h-[2px] before:bg-[#e5e7eb]"><Link onClick={ClickHandler} href='/practice-single/[slug]' as={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></h3>
                                    <p className="text-[#777] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] font-normal leading-[1.5]">{practice.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Practice;