import React from 'react'

const Features = (props) => {
    return (
        <div className="bg-[#f1f1f1] pt-[50px] pb-[30px]">
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-lawyer text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Hızlıca</span>
                                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Randevu Alın</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-scale text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Hemen</span>
                                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Danışmanlık Al</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-white flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-[#e5e7eb] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-network text-[60px] col:text-[50px] col:leading-[55px] text-white"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Sizin İçin Buradayız</span>
                                <h3 className="text-[#333] text-[27px] col:text-[22px] font-medium">Uzman Ekibimiz</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features;