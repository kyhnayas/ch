import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'


const ConsultingArea = (props) => {
    return (
        <section className="relative bg-center bg-cover bg-no-repeat bg-fixed py-[100px] md:py-[70px] sm:py-[50px] col:py-[40px] z-10 
   before:content-[''] before:bg-[rgba(15,15,15,0.95)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url(${'/images/contact/1.jpg'})` }}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 md:col-span-12 ">
                        <div className="contact-text md:mb-[30px] sm:mb-[20px] col:mb-[15px]">
                            <div className="title">
                                <span className="text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px] text-[#666666]">Değerli Müvekkillerimiz İçin</span>
                                <h2 className="text-[36px] md:text-[28px] sm:text-[24px] col:text-[20px] font-medium text-white pb-[20px] md:pb-[15px] sm:pb-[12px] col:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] md:before:left-[-40px] sm:before:hidden
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] md:before:w-[40px] before:h-[1px] before:bg-[#e5e7eb] md:before:hidden">Ücretsiz Danışmanlık</h2>
                            </div>
                            <span className="text-[18px] md:text-[16px] sm:text-[14px] col:text-[13px] text-[#e5e7eb] block mb-[20px] md:mb-[15px] sm:mb-[10px] col:mb-[8px]">Bize 7/24 <span className="whitespace-nowrap">0530 799 35 43</span> veya <span className="whitespace-nowrap">0533 595 84 54</span> numaralarından ulaşabilir veya formu doldurabilirsiniz.</span>
                            <p className="mt-[30px] md:mt-[20px] sm:mt-[15px] col:mt-[10px] text-[#ddd] leading-[30px] md:leading-[24px] sm:leading-[20px] col:leading-[18px] text-[16px] md:text-[14px] sm:text-[13px] col:text-[12px]">Hukuki sorunlarınızın çözümü için alanında uzman avukatlarımızla size en iyi hizmeti sunmaya hazırız. Tüm soru ve sorunlarınız için formu eksiksiz doldurarak tarafımıza iletebilirsiniz.</p>
                        </div>
                    </div>
                    <div className="col-span-7 md:col-span-12">
                        <ConsultingFrom />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultingArea;