import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'


const ConsultingArea = (props) => {
    return (
        <section className="relative bg-center bg-cover bg-no-repeat bg-fixed py-[100px] z-10 
   before:content-[''] before:bg-[rgba(15,15,15,0.95)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url(${'/images/contact/1.jpg'})` }}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 md:col-span-12 ">
                        <div className="contact-text md:mb-[30px]">
                            <div className="title">
                                <span className="text-[16px] text-[#666666]">Değerli Müvekkillerimiz İçin</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#e5e7eb] md:before:hidden">Danışmanlık Al</h2>
                            </div>
                            <span className="text-[18px] text-[#e5e7eb]">Bize 7/24 +90 530 799 35 43 veya +90 533 595 84 54 numaralarından ulaşabilir veya formu doldurabilirsiniz.</span>
                            <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">Hukuki sorunlarınızın çözümü için alanında uzman avukatlarımızla size en iyi hizmeti sunmaya hazırız. Tüm soru ve sorunlarınız için formu eksiksiz doldurarak tarafımıza iletebilirsiniz.</p>
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