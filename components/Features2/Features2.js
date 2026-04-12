import React from 'react'

const Features2 = (props) => {
    return (
        <div className="relative pt-[50px] pb-[30px] bg-no-repeat bg-cover bg-center z-10
               before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(15,15,15,.9)]  before:-z-10" style={{ backgroundImage: `url(${'/images/services/1.jpg'})` }}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4 md:col-span-6 sm:col-span-12">
                        <div className="bg-transparent border border-[rgba(204,204,204,.2)] flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-transparent border-r border-[rgba(204,204,204,.2)]  h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-lawyer text-[60px] col:text-[50px] col:leading-[55px] text-[#e5e7eb]"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Hemen</span>
                                <h3 className="text-white text-[27px] col:text-[22px] font-medium">Randevu Alın</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-transparent border border-[rgba(204,204,204,.2)] flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-transparent border-r border-[rgba(204,204,204,.2)] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-scale text-[60px] col:text-[50px] col:leading-[55px] text-[#e5e7eb]"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Hızlıca</span>
                                <h3 className="text-white text-[27px] col:text-[22px] font-medium">Uzman Görüşü Alın</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5">
                        <div className="bg-transparent border border-[rgba(204,204,204,.2)] flex items-center sm:mx-[30px] col:mx-0">
                            <div className="bg-transparent border-r border-[rgba(204,204,204,.2)] h-[100px] col:h-[80px] col:w-[80px] w-[100px] text-center px-[18px] col:p-0">
                                <i className="fi flaticon-network text-[60px] col:text-[50px] col:leading-[55px] text-[#e5e7eb]"></i>
                            </div>
                            <div className="pl-[24px]">
                                <span className="text-[#666666] text-[16px] font-normal">Ekibimize</span>
                                <h3 className="text-white text-[27px] col:text-[22px] font-medium">Siz De Katılın</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features2;