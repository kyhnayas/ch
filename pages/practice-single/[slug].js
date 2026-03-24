import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Practices from '../../api/Practices';
import Sidebar from './Sidebar';
import Newsletter from '../../components/Newsletter/Newsletter';
import pImg from '/public/images/practice/4.jpg'
import { useRouter } from 'next/router'
import Image from 'next/image';

const PracticeSinglePage = (props) => {
    const router = useRouter()

    const PracticeDetails = Practices.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={PracticeDetails?.sTitle} pagesub={'Hizmet Detayı'} />
            <div className="py-[100px] md:py-[80px]">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <Sidebar />
                        <div className="col-span-8 md:col-span-12 order-2 md:order-1">
                            <Image className="w-full" src={PracticeDetails?.sImg} alt="" />
                            <div className="pt-[50px]">
                                <h2 className="text-[36px] text-[#ffffff] mb-[25px]">{PracticeDetails?.sTitle}</h2>
                                <h5 className="text-[22px] font-base-font leading-[40px] text-[#ffffff] mb-[25px]">Hukuki sorunlarınıza profesyonel ve sonuç odaklı çözümler üretiyoruz. </h5>
                                <p className="text-[16px] leading-[30px] py-[20px] mb-[16px] text-[#666]">Müvekkillerimizin yasal haklarını korumak ve uyuşmazlıkları en hızlı şekilde çözümlendirmek için alanında uzman avukat kadromuzla yanınızdayız. Gerek dava süreçlerinde gerekse hukuki danışmanlık hizmetlerinde şeffaf ve güvenilir bir iletişim benimsiyoruz.</p>
                                <p className="text-[16px] leading-[30px] mb-[25px] text-[#666]">İlgili mevzuat ve güncel içtihatlar ışığında durumunuzu değerlendiriyor, size en uygun yasal stratejiyi belirliyoruz. Amacımız, yaşayabileceğiniz mağduriyetleri önceden engellemek ve hak kaybına uğramamanız için gerekli tüm adımları kararlılıkla atmaktır.</p>
                            </div>
                            <div className="mt-[40px]">
                                <div className="float-left col:float-none mr-[30px] col:mr-0 col:mb-[30px] w-[30%] col:w-full">
                                    <img src={pImg} alt="" />
                                </div>
                                <div className="organigation-text float-left w-[64%] col:float-none  col:w-full">
                                    <h2 className="text-[24px] text-[#ffffff] mb-[8px] block">İlgili Süreçler</h2>
                                    <span className="block pt-[15px] text-[15px] text-[#666]"><i className="fa fa-check-square-o text-[#666] pr-[15px]" aria-hidden="true"></i>Kapsamlı Dosya İncelemesi ve Analiz</span>
                                    <span className="block pt-[15px] text-[15px] text-[#666]"><i className="fa fa-check-square-o text-[#666] pr-[15px]" aria-hidden="true"></i>Yasal Hakların Tespiti ve Strateji Belirleme</span>
                                    <span className="block pt-[15px] text-[15px] text-[#666]"><i className="fa fa-check-square-o text-[#666] pr-[15px]" aria-hidden="true"></i>Dava Öncesi Süreci ve Arabuluculuk (Gerekirse)</span>
                                    <span className="block pt-[15px] text-[15px] text-[#666]"><i className="fa fa-check-square-o text-[#666] pr-[15px]" aria-hidden="true"></i>Dava Takibi ve Duruşma Temsilleri</span>
                                    <span className="block pt-[15px] text-[15px] text-[#666]"><i className="fa fa-check-square-o text-[#666] pr-[15px]" aria-hidden="true"></i>Kararın İnfazı ve Sonuçlandırma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PracticeSinglePage;
