import React from 'react'

const Features = (props) => {
    return (
        <div className="bg-[#f1f1f1] pt-[50px] md:pt-[40px] sm:pt-[30px] pb-[30px] md:pb-[25px] sm:pb-[20px]">
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3 md:gap-2">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5 md:mb-4 sm:mb-3">
                        <div className="bg-white flex items-center sm:mx-[15px] md:mx-[10px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] md:h-[85px] sm:h-[75px] col:h-[65px] col:w-[65px] md:w-[85px] sm:w-[75px] w-[100px] text-center px-[18px] col:p-0 flex items-center justify-center flex-shrink-0">
                                <i className="fi flaticon-lawyer text-[60px] md:text-[50px] sm:text-[45px] col:text-[40px] col:leading-[45px] text-white"></i>
                            </div>
                            <div className="pl-[24px] md:pl-[16px] sm:pl-[12px] col:pl-[8px]">
                                <span className="text-[#666666] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] font-normal block">Hızlıca</span>
                                <h3 className="text-[#333] text-[27px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium m-0">Randevu Alın</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5 md:mb-4 sm:mb-3">
                        <div className="bg-white flex items-center sm:mx-[15px] md:mx-[10px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] md:h-[85px] sm:h-[75px] col:h-[65px] col:w-[65px] md:w-[85px] sm:w-[75px] w-[100px] text-center px-[18px] col:p-0 flex items-center justify-center flex-shrink-0">
                                <i className="fi flaticon-scale text-[60px] md:text-[50px] sm:text-[45px] col:text-[40px] col:leading-[45px] text-white"></i>
                            </div>
                            <div className="pl-[24px] md:pl-[16px] sm:pl-[12px] col:pl-[8px]">
                                <span className="text-[#666666] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] font-normal block">Hemen</span>
                                <h3 className="text-[#333] text-[27px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium m-0">Ücretsiz Danışmanlık</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5 md:mb-4 sm:mb-3">
                        <div className="bg-white flex items-center sm:mx-[15px] md:mx-[10px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] md:h-[85px] sm:h-[75px] col:h-[65px] col:w-[65px] md:w-[85px] sm:w-[75px] w-[100px] text-center px-[18px] col:p-0 flex items-center justify-center flex-shrink-0">
                                <i className="fi flaticon-network text-[60px] md:text-[50px] sm:text-[45px] col:text-[40px] col:leading-[45px] text-white"></i>
                            </div>
                            <div className="pl-[24px] md:pl-[16px] sm:pl-[12px] col:pl-[8px]">
                                <span className="text-[#666666] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] font-normal block">Sizin İçin Buradayız</span>
                                <h3 className="text-[#333] text-[27px] md:text-[22px] sm:text-[18px] col:text-[16px] font-medium m-0">Uzman Ekibimiz</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;