import React from 'react'
import Link from "next/link";
import about from '../../public/images/about/2.jpg'
import sign from '../../public/images/about/1.png'
import Image from 'next/image';


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="pt-[120px] pb-[100px]">
            <div className="wraper">
                <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className=" relative max-w-[520px] before:absolute before:bg-[#e5e7eb] before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] before:top-[-20px] ">
                                <Image className="w-full" src={about} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="mb-[20px]">
                            <h2 className="text-[#333333] text-[32px]">{props.data?.aboutTitle || "Hakkımızda"}</h2>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">{props.data?.aboutDescription || "CH Hukuk Bürosu olarak, alanında uzman 2 ortak ve 3 çalışan avukatımızla hukukun her alanında profesyonel danışmanlık ve dava takibi hizmeti sunuyoruz. Müvekkillerimizin haklarını en üst seviyede korumak için 5 kişilik güçlü avukat kadromuzla yanınızdayız."}</p>
                            <div className="mb-[50px] col:mb-[20px]">
                                <Link onClick={ClickHandler} href="/about" className="bg-[#333333] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#111111]
                                col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                                ">Hakkımızda Daha Fazla..</Link>
                            </div>
                            <div className="signature">
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