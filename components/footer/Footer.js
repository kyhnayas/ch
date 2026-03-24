import React from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.svg'
import Practices from '../../api/Practices';
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="relative bg-[#111111] z-10">
            <div className="pt-[100px] md:pt-[70px] sm:pt-[50px] col:pt-[40px] pb-[90px] md:pb-[60px] sm:pb-[45px] col:pb-[35px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 md:gap-2">
                        <div className="w-[420px] md:w-full xl:w-[355px] lg:w-[297px] pr-[125px] md:pr-0 md:mb-[40px] lg:pr-0 relative text-left">
                            <div className="mb-7 md:mb-5 sm:mb-4 col:mb-3">
                                <Link className="text-[45px] md:text-[36px] sm:text-[28px] col:text-[24px] font-bold flex items-center text-white" href="/">
                                    <Image src={Logo} alt="" /></Link>
                            </div>
                            <p className="text-white text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] mb-[10px] md:mb-[8px] sm:mb-[6px] col:mb-[5px] leading-[1.6]">
                                CH Hukuk Bürosu olarak, adalete ulaşmanız ve haklarınızı korumanız için profesyonel çözümler sunuyoruz.
                            </p>
                            <ul className="overflow-hidden pt-[15px] md:pt-[12px] sm:pt-[10px] col:pt-[8px]">
                                <li className="text-white float-left group "><Link className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] transition-all group-hover:text-[#666666]" onClick={SubmitHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                <li className="text-white float-left group ml-[15px] md:ml-[12px] sm:ml-[10px] col:ml-[8px]"><Link className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] transition-all group-hover:text-[#e5e7eb]" onClick={SubmitHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li className="text-white float-left group ml-[15px] md:ml-[12px] sm:ml-[10px] col:ml-[8px]"><Link className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] transition-all group-hover:text-[#e5e7eb]" onClick={SubmitHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                <li className="text-white float-left group ml-[15px] md:ml-[12px] sm:ml-[10px] col:ml-[8px]"><Link className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] transition-all group-hover:text-[#e5e7eb]" onClick={SubmitHandler} href="/"><i className="ti-pinterest"></i></Link></li>
                                <li className="text-white float-left group ml-[15px] md:ml-[12px] sm:ml-[10px] col:ml-[8px]"><Link className="text-white text-[18px] md:text-[16px] sm:text-[14px] col:text-[12px] transition-all group-hover:text-[#e5e7eb]" onClick={SubmitHandler} href="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                        <div className="w-[200px] md:w-full ml-auto md:ml-0 md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7 md:mb-5 sm:mb-4 col:mb-3">
                                <h3 className="text-[28px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium font-heading-font text-white capitalize">Hızlı Bağlantılar</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block"><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" href="/">Ana Sayfa</Link></li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block"><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" href="/about">Hakkımızda</Link></li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block"><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" href="/practice">Hizmetlerimiz</Link></li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block"><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" href="/attorneys">Ekibimiz</Link></li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block"><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" href="/contact">İletişim</Link></li>
                            </ul>
                        </div>
                        <div className="pl-[15px] md:pl-0 md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7 md:mb-5 sm:mb-4 col:mb-3">
                                <h3 className="text-[28px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium font-heading-font text-white capitalize">Hizmetlerimiz</h3>
                            </div>
                            <ul>
                                {Practices.map((practice, Pitem) => (
                                    <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block" key={Pitem}><Link className="text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] hover:text-[#e5e7eb] transition-all" onClick={ClickHandler} href="/practice-single/[slug]" as={`/practice-single/${practice.slug}`}>{practice.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7 md:mb-5 sm:mb-4 col:mb-3">
                                <h3 className="text-[28px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium font-heading-font text-white capitalize">Bize Ulaşın</h3>
                            </div>
                            <ul>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] leading-[1.5]">İstiklal mh. Muhsin Yazıcıoğlu blv. No:88</li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] leading-[1.5]">D:11-12 KNN54 İş mrkz. Serdivan / Sakarya</li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] leading-[1.5]">Gsm: 0530 799 35 43 - 0533 595 84 54</li>
                                <li className="relative mb-[8px] md:mb-[6px] sm:mb-[5px] col:mb-[4px] block text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] leading-[1.5]">E-Posta: info@ch-hukuk.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wraper">
                <div className=" border-t-1 border-[rgba(192,181,150,.3)] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-white text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] py-[20px] md:py-[15px] sm:py-[12px] col:py-[10px]"> Gizlilik Politikası | &copy; 2024 CH Hukuk. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;