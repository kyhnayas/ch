import React from 'react'

const Newsletter = (props) => {


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="bg-[#000000] pt-[70px] md:pt-[50px] sm:pt-[40px] col:pt-[30px] pb-[80px] md:pb-[60px] sm:pb-[45px] col:pb-[35px]">
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-3 md:col-span-2 md:hidden"></div>
                    <div className="col-span-6 md:col-span-8 sm:col-span-12 col:col-span-12">
                        <div className="text-center max-w-[443px] sm:w-full sm:px-[15px] col:px-[10px] mx-auto">
                            <h3 className="text-[30px] md:text-[24px] sm:text-[20px] col:text-[18px] font-medium mb-[40px] md:mb-[30px] sm:mb-[20px] col:mb-[15px] text-[#e5e7eb]">E-Bültene Kayıt Olun</h3>
                            <form className="relative flex flex-col sm:flex-row gap-2 sm:gap-0" onClick={SubmitHandler}>
                                <input type="text" className="w-full bg-transparent h-[50px] md:h-[45px] sm:h-[40px] col:h-[36px] text-white py-[6px] md:py-[5px] sm:py-[4px] col:py-[3px]
                            pr-[80px] md:pr-[70px] sm:pr-0 pl-[30px] md:pl-[20px] sm:pl-[15px] col:pl-[10px] border border-[#ddd] focus:outline-0 rounded-[5px] text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px]" placeholder="E-Posta Adresiniz..." />
                                <button type="submit" className="bg-[#e5e7eb] text-[#000] text-white border-0 outline-0 absolute right-0 top-0 sm:relative sm:right-auto sm:top-auto w-[125px] md:w-[100px] sm:w-[80px] col:w-[70px] h-[50px] md:h-[45px] sm:h-[40px] col:h-[36px] font-semibold text-[14px] md:text-[13px] sm:text-[12px] col:text-[11px] whitespace-nowrap hover:bg-[#d4c291] transition">Kayıt Ol</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 md:hidden"></div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;