import React, { useState } from 'react'
import Link from "next/link";
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '/public/images/logo.svg'
import Image from 'next/image';


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <header className=" relative z-[111]">
            <div className="bg-[#000000] pt-[5px] md:pt-[0px] sm:pt-[0px]">
                <div className="wraper relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-[''] sm:before:hidden">
                    <div className="grid grid-cols-12 md:hidden">
                        <div className="col-span-10">
                            <ul className="text-left flex gap-0 md:text-center md:flex-col md:gap-1">
                                <li className=" text-white inline-flex items-center p-[15px] text-[13px] break-words"><i className="fa fa-map-marker pr-[10px] text-[#ffffff] text-[18px]" aria-hidden="true"></i> <span>İstiklal mh. Muhsin Yazıcıoğlu blv. Serdivan, Sakarya</span></li>
                                <li className="relative text-white inline-flex items-center p-[15px] text-[13px]
                                before:absolute before:content-[''] before:left-0 before:top-[50%] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] before:z-10 before:transform before:-translate-x-1/2 before:-translate-y-1/2"><i className="fa fa-phone pr-[10px] text-[#ffffff] text-[18px]" aria-hidden="true"></i>0530 799 35 43 - 0533 595 84 54</li>
                                <li className="relative text-white inline-flex items-center p-[15px] text-[13px] before:absolute before:content-[''] before:left-0 before:top-[50%] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] before:z-10 before:transform before:-translate-x-1/2 before:-translate-y-1/2"><i className="fa fa-clock-o pr-[10px] text-[#ffffff] text-[18px]" aria-hidden="true"></i>09:00 - 18:00</li>
                            </ul>
                        </div>
                        <div className="col-span-2">
                            <div className="text-right md:text-center md:mb-[15px]">
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn md:text-[14px] md:py-[8px] md:px-[22px]">Ücretsiz Danışmanlık</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block sm:block py-[10px] sm:py-[8px] col:py-[6px] border-b border-[rgba(255,255,255,.1)]">
                        <div className="grid grid-cols-12 gap-3 md:gap-2">
                            <div className="col-span-6 flex items-center gap-2 text-[11px] sm:text-[10px] col:text-[9px]">
                                <i className="fa fa-map-marker text-[#e5e7eb] text-[12px] sm:text-[11px] flex-shrink-0"></i>
                                <span className="text-white truncate">Serdivan, Sakarya</span>
                            </div>
                            <div className="col-span-6 flex justify-end">
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn text-[10px] sm:text-[9px] col:text-[8px] py-[5px] sm:py-[4px] col:py-[3px] px-[10px] sm:px-[8px] col:px-[6px] whitespace-nowrap inline-block">Danışmanlık</Link>
                            </div>
                            <div className="col-span-6 flex items-center gap-2 text-[11px] sm:text-[10px] col:text-[9px]">
                                <i className="fa fa-phone text-[#e5e7eb] text-[12px] sm:text-[11px] flex-shrink-0"></i>
                                <span className="text-white truncate">0530 799 35 43</span>
                            </div>
                            <div className="col-span-6 flex items-center justify-end gap-1 text-[10px] sm:text-[9px] col:text-[8px]">
                                <i className="fa fa-clock-o text-[#e5e7eb] text-[11px] sm:text-[10px] flex-shrink-0"></i>
                                <span className="text-white whitespace-nowrap">09:00 - 18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-site-header bg-[#000000] relative ">
                <div className="wraper">
                    <div className="flex items-center justify-between ">
                        <MobileMenu />

                        <div className="logo w-[255px] md:w-[150px] sm:w-[120px] col:w-[100px] mx-auto md:mx-auto">
                            <Link onClick={ClickHandler} className="text-[45px] col:text-[25px] font-bold flex items-center text-white" href="/">
                                <Image className="w-full" src={Logo} alt="" /></Link>
                        </div>
                        <ul className="md:hidden mr-[-50px] lg-[-10px]">
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/" className="relative text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white hover:text-[#e5e7eb] block uppercase font-base-font font-normal transition-all">Ana Sayfa</Link>
                            </li>
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/about" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#e5e7eb] transition-all">Hakkımızda</Link>
                            </li>
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/practice" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#e5e7eb] transition-all">Hizmetlerimiz</Link>
                            </li>
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/case-stadies" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#e5e7eb] transition-all">Emsal Kararlar</Link>
                            </li>
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/contact" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#e5e7eb] transition-all">İletişim</Link>
                            </li>
                        </ul>
                        <div className="text-right relative before:absolute before:w-[1px] before:h-full py-[37px] md:py-[20px] pl-[37px] md:pl-[15px] lg:pl-[20px]
                         before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-[''] ">
                            <ul>
                                <li className="relative header-search-form-wrapper">
                                    <div className="cart-search-contact text-right text-white border-left cursor-pointer border-[rgba(255,255,255,.07)]">
                                        <div className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>
                                            <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                                        </div>
                                    </div>
                                    <ul className={`header-search-form absolute right-0 top-[300%] w-[263px] sm:w-[calc(100vw-20px)] sm:left-[10px] sm:right-auto bg-white z-20 p-[15px] sm:p-[12px] transform text-center transition-all opacity-0 invisible  ${menuActive ? "header-search-content-toggle" : ""}`}>
                                        <li>
                                            <form action="search" className="relative" onSubmit={SubmitHandler}>
                                                <input className="bg-white w-full h-[40px] sm:h-[36px] pl-[10px] pr-[40px] sm:pr-[36px] focus-visible:outline-0 border border-[rgba(64,59,59,0.07)] text-[14px] sm:text-[13px]" type="text" placeholder="Arama yapın.." />
                                                <button className="absolute right-0 top-0 w-[40px] sm:w-[36px] h-[40px] sm:h-[36px] bg-[#000000] text-white border-0"><i className="fa fa-search text-[14px] sm:text-[12px]"></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;