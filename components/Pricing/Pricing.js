import React from 'react'
import Link from "next/link";


const Pricing = (props) => {

    return (
        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#666666]">Planlarımız</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-['']
               before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px]
                before:bg-[#e5e7eb]">Fiyatlandırma Tablosu</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white group transition-all ease-in-out text-center pt-[35px] px-[40px] pb-[50px] col:px-[20px] col:py-[20px] hover:bg-[#e5e7eb]">
                            <div className="h-[80px] w-[80px] mx-auto">
                                <i className="fi flaticon-scale text-[60px] col:leading-[45px] text-[#e5e7eb] transition-all ease-in-out group-hover:text-white"></i>
                            </div>
                            <div>
                                <span className="block mt-[10px] text-[#333] text-[18px] font-semibold transition-all ease-in-out group-hover:text-white">Başlangıç Paketi</span>
                                <h3 className="text-[#ffffff] text-[60px] col:text-[44px] font-base-font font-semibold relative mb-[10px] pt-[15px] transition-all ease-in-out 
                    group-hover:text-white">
                                    <span className="text-[30px] col:text-[25px] mr-[-10px]">$</span>
                                    120
                                </h3>
                                <p className="text-[#777] text-[16px] mb-[30px] font-normal transition-all ease-in-out group-hover:text-white">İhtiyacınıza uygun temel düzeyde hukuki danışmanlık hizmetlerimizle güvende olun.</p>
                                <Link href="/practice" className="transition-all ease-in-out group-hover:text-[#e5e7eb] group-hover:bg-white bg-[#e5e7eb] text-[16px] font-semibold text-white py-[10px] px-[38px] capitalize inline-block">Hemen Başla</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white group transition-all ease-in-out text-center pt-[35px] px-[40px] pb-[50px] col:px-[20px] col:py-[20px] hover:bg-[#e5e7eb]">
                            <div className="h-[80px] w-[80px] mx-auto">
                                <i className="fi flaticon-scale text-[60px] col:leading-[45px] text-[#e5e7eb] transition-all ease-in-out group-hover:text-white"></i>
                            </div>
                            <div>
                                <span className="block mt-[10px] text-[#333] text-[18px] font-semibold transition-all ease-in-out group-hover:text-white">Temel Paket</span>
                                <h3 className="text-[#ffffff] text-[60px] col:text-[44px] font-base-font font-semibold relative mb-[10px] pt-[15px] transition-all ease-in-out 
                    group-hover:text-white">
                                    <span className="text-[30px] col:text-[25px] mr-[-10px]">$</span>
                                    150
                                </h3>
                                <p className="text-[#777] text-[16px] mb-[30px] font-normal transition-all ease-in-out group-hover:text-white">Kapsamlı dosya incelemeleri ve detaylı hukuki süreç takibi için ideal paket.</p>
                                <Link href="/practice" className="transition-all ease-in-out group-hover:text-[#e5e7eb] group-hover:bg-white bg-[#e5e7eb] text-[16px] font-semibold text-white py-[10px] px-[38px] capitalize inline-block">Hemen Başla</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white group transition-all ease-in-out text-center pt-[35px] px-[40px] pb-[50px] col:px-[20px] col:py-[20px] hover:bg-[#e5e7eb]">
                            <div className="h-[80px] w-[80px] mx-auto">
                                <i className="fi flaticon-scale text-[60px] col:leading-[45px] text-[#e5e7eb] transition-all ease-in-out group-hover:text-white"></i>
                            </div>
                            <div>
                                <span className="block mt-[10px] text-[#333] text-[18px] font-semibold transition-all ease-in-out group-hover:text-white">Gelişmiş Paket</span>
                                <h3 className="text-[#ffffff] text-[60px] col:text-[44px] font-base-font font-semibold relative mb-[10px] pt-[15px] transition-all ease-in-out 
                    group-hover:text-white">
                                    <span className="text-[30px] col:text-[25px] mr-[-10px]">$</span>
                                    180
                                </h3>
                                <p className="text-[#777] text-[16px] mb-[30px] font-normal transition-all ease-in-out group-hover:text-white">Tüm dava, sözleşme hazırlıkları ve sürekli danışmanlığınız için en üst sınıf plan paketi.</p>
                                <Link href="/practice" className="transition-all ease-in-out group-hover:text-[#e5e7eb] group-hover:bg-white bg-[#e5e7eb] text-[16px] font-semibold text-white py-[10px] px-[38px] capitalize inline-block">Hemen Başla</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;