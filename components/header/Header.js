import React, { useState } from 'react'
import Link from "next/link";
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../public/images/logo.svg'
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
            <div className="bg-[#000000] pt-[5px]">
                <div className="wraper relative before:absolute before:w-full before:h-[1px] before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-['']">
                    <div className="grid grid-cols-12">
                        <div className="col-span-10 md:col-span-12">
                            <ul className="text-left md:text-center">
                                <li className=" text-white inline-block p-[15px]  col:pr-0 pl-0 col:pb-[0] text-[13px]"><i className="fa fa-map-marker pr-[10px] col:pt-[0] text-[#ffffff] text-[20px]" aria-hidden="true"></i> İstiklal Mh. Muhsin Yazıcıoğlu Blv. Serdivan, Sakarya</li>
                                <li className="relative text-white inline-block p-[15px]  col:pr-0 text-[13px]
                                before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)]  before:z-10 before:transform before:-translate-x-1/2 md:before:hidden">
                                    <i className="fa fa-mobile pr-[10px] text-[#ffffff] text-[20px]" aria-hidden="true"></i>+90 530 799 35 43 - +90 533 595 84 54</li>
                                <li className="relative text-white inline-block p-[15px] col:pr-0 text-[13px] before:absolute before:content-[''] before:left-0 before:top-[15px] before:w-[1px] before:h-[25px] before:bg-[rgba(255,255,255,.07)] md:before:hidden  before:z-10 before:transform before:-translate-x-1/2 "><i className="fa fa-clock-o pr-[10px] text-[#ffffff] text-[20px]" aria-hidden="true"></i>09:00 - 18:00</li>
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-12">
                            <div className="text-right md:text-center md:mb-[15px]">
                                <Link onClick={ClickHandler} href="/contact" className="theme-btn md:text-[14px] md:py-[8px] md:px-[22px]">Danışmanlık Al</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-site-header bg-[#000000] relative ">
                <div className="wraper">
                    <div className="flex items-center justify-between ">
                        <MobileMenu />

                        <div className="logo w-[255px] md:w-[200px] md:mx-auto sm:w-[180px] col:w-[160px]">
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
                                <Link onClick={ClickHandler} href="/contact" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-white block uppercase font-base-font font-normal hover:text-[#e5e7eb] transition-all">İletişim</Link>
                            </li>
                        </ul>
                        <div className="text-right relative before:absolute before:w-[1px] before:h-full py-[37px]  pl-[37px] lg:pl-[20px]
                         before:bg-[rgba(255,255,255,.07)] before:bottom-0 before:left-0 before:content-[''] ">
                            <ul>
                                <li className="relative header-search-form-wrapper">
                                    <div className="cart-search-contact text-right text-white border-left cursor-pointer border-[rgba(255,255,255,.07)]">
                                        <div className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}>
                                            <i className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i>
                                        </div>
                                    </div>
                                    <ul className={`header-search-form absolute right-0 top-[300%] w-[263px] bg-white z-20 p-[15px]  transform text-center transition-all opacity-0 invisible  ${menuActive ? "header-search-content-toggle" : ""}`}>
                                        <li>
                                            <form action="search" className="relative" onSubmit={SubmitHandler}>
                                                <input className="bg-white w-full h-[40px] pl-[10px] pr-[40px] focus-visible:outline-0 border border-[rgba(64,59,59,0.07)]" type="text" placeholder="Arama yapın.." />
                                                <button className="absolute right-0 top-0 w-[40px] h-[40px] bg-[#000000] text-white border-0"><i className="fa fa-search "></i></button>
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