import React from 'react'
import Link from "next/link";
import about from '/public/images/about/2.jpg'
import sign from '/public/images/about/1.png'
import Image from 'next/image';


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="pt-[120px] md:pt-[90px] sm:pt-[60px] col:pt-[50px] pb-[100px] md:pb-[70px] sm:pb-[50px] col:pb-[40px]">
            <div className="wraper">
                <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px] md:mb-[15px] sm:mb-[10px]">
                            <div className=" relative max-w-[520px] before:absolute before:bg-[#e5e7eb] before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] md:before:left-[-15px] sm:before:left-[-10px] before:top-[-20px] md:before:top-[-15px] sm:before:top-[-10px] ">
                                <Image className="w-full" src={about} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="mb-[20px] md:mb-[15px] sm:mb-[10px]">
                            <h2 className="text-[#333333] text-[32px] md:text-[26px] sm:text-[24px] col:text-[20px] mb-[20px] sm:mb-[15px] col:mb-[12px]">{props.data?.aboutTitle || "Hakkımızda"}</h2>
                            <p className="text-[#666] text-[15px] md:text-[14px] sm:text-[13px] col:text-[12px] leading-[28px] md:leading-[24px] sm:leading-[20px] mb-[30px] md:mb-[20px] sm:mb-[15px] col:mb-[12px]">{props.data?.aboutDescription || "CH Hukuk Bürosu olarak, alanında uzman 2 ortak ve 3 çalışan avukatımızla hukukun her alanında profesyonel danışmanlık ve dava takibi hizmeti sunuyoruz. Müvekkillerimizin haklarını en üst seviyede korumak için 5 kişilik güçlü avukat kadromuzla yanınızdayız."}</p>
                            <div className="mb-[50px] md:mb-[35px] sm:mb-[25px] col:mb-[15px]">
                                <Link onClick={ClickHandler} href="/about" className="bg-[#333333] cursor-pointer text-[16px] md:text-[15px] sm:text-[14px] col:text-[13px] font-semibold text-white px-[38px] md:px-[28px] sm:px-[20px] col:px-[16px] py-[10px] md:py-[8px] sm:py-[6px] col:py-[5px] capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#111111]
                                ">Hakkımızda Daha Fazla..</Link>
                            </div>
                            <div className="signature w-[150px] md:w-[120px] sm:w-[100px] col:w-[80px]">
                                <Image src={sign} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;