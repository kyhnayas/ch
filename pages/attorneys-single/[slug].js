import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Attorneys from '../../api/attorneys'
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Cases from '../../api/case';
import { getMarkdownContent } from '../../utils/mdParser';

const AttorneysSinglePage = ({ attorneyData, mdContent }) => {
    const router = useRouter()

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // mdContent yoksa (örneğin md dosyası eksikse) hata almamak için boş obje varsayımı
    const data = mdContent || {};

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={data.name || attorneyData?.name} pagesub='Avukat Detayı' />
            <section className="pt-[100px] pb-[80px] md:pt-[90px] md:pb-[60px] sm:pt-[80px] sm:pb-[50px]">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-1"></div>
                        <div className="col-span-10 md:col-span-12">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6 md:col-span-6 sm:col-span-12">
                                    <div className="bg-[#f5f5f5] text-center pt-[47px] md:pt-[56px]">
                                        <div className="w-[380px] h-[380px] md:w-[350px] md:h-[350px] col:w-[300px] col:h-[300px] mx-auto mb-[47px] md:mb-[56px]">
                                            {attorneyData?.AtImg && (
                                                <Image className="rounded-full border-[15px] border-[#e5e7eb]"
                                                    src={attorneyData.AtImg} alt={data.name || attorneyData?.name} />
                                            )}
                                        </div>
                                        <div className="bg-[#dddad3] py-[25px]">
                                            <h2 className="text-[30px] font-normal text-[#333333] col:text-[20px]">{data.name || attorneyData?.name}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6 md:col-span-6 sm:col-span-12">
                                    <div className="bg-[#f5f5f5] sm:mt-[30px]">
                                        <div className="bg-[#ddd] py-[25px]">
                                            <h3 className="text-center text-[30px] text-[#333333] col:text-[20px]">Önemli Bilgiler</h3>
                                        </div>
                                        <div className="p-[30px] pb-0">
                                            <ul>
                                                <li className="text-[16px] text-[#666]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >Pozisyon: </span> {data.position || attorneyData?.title}</li>
                                                <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >Çalışma Alanı: </span>{data.practiceArea}</li>
                                                <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >Deneyim: </span>{data.experience}</li>
                                                <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >Adres: </span>{data.address}</li>
                                                <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >Telefon: </span>{data.phone}</li>
                                                <li className="text-[16px] text-[#666] mt-[15px] md:mt-[12px]"><span className="text-[#333333] text-[20px] font-bold font-heading-font" >E-Posta: </span>{data.email}</li>
                                            </ul>
                                            <ul className="overflow-hidden mt-[22px] pb-[36px]">
                                                {data.facebook && data.facebook !== '#' && (
                                                    <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                                                        <Link href={data.facebook} className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"><i className="fa fa-facebook"></i></Link>
                                                    </li>
                                                )}
                                                {data.twitter && data.twitter !== '#' && (
                                                    <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group">
                                                        <Link href={data.twitter} className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"><i className="fa fa-twitter"></i></Link>
                                                    </li>
                                                )}
                                                {data.linkedin && data.linkedin !== '#' && (
                                                    <li className="w-[40px] h-[40px] leading-[40px] float-left text-center mr-[5px] group ">
                                                        <Link href={data.linkedin} className="block text-[#333] border bg-transparent border-[#ddd] transition-all ease-in-out group-hover:border-transparent group-hover:bg-[#666] group-hover:text-white"><i className="fa fa-linkedin"></i></Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-[50px]">
                                <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#333333]">Hakkımda / Deneyimlerim</h2>
                                {data.experienceText && (
                                    <p className="text-[#666] text-[16px] leading-[28px] mb-[20px]">{data.experienceText}</p>
                                )}
                                {data.contentHtml && (
                                    <div className="text-[#666] text-[16px] leading-[28px]" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                                )}
                            </div>

                            <div className="mb-[50px]">
                                <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#333333]">Eğitim Bİlgileri</h2>
                                <ul>
                                    {data.education && data.education.map((edu, idx) => (
                                        <li key={idx} className="relative pl-[15px] pb-[10px] text-[15px] text-[#333]
                                        before:absolute before:left-0 before:top-0 before:content-['\f0da'] before:font-['FontAwesome']
                                        before:text-[#e5e7eb] before:text-[16px]">{edu}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-[50px]">
                                <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#333333]">Yabancı Dil</h2>
                                <p className="text-[#666] text-[16px] leading-[28px]">{data.language}</p>
                            </div>

                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-9 md:col-span-10 sm:col-span-12">
                                    <div className="mt-[60px]">
                                        <h2 className="text-[30px] md:text-[25px] font-normal mb-[30px] text-[#333333]">İletişime Geçin</h2>
                                        <form method="post" className="contact-validation-active overflow-hidden mx-[-15px]" id="contact-form" onSubmit={SubmitHandler}>
                                            <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                                                <input type="text" name="name" id="name" className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible" placeholder="Adınız Soyadınız" />
                                            </div>
                                            <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                                                <input type="email" name="email" id="email" className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible" placeholder="E-Posta Adresiniz" />
                                            </div>
                                            <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                                                <input type="text" name="phone" id="phone" className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible" placeholder="Telefon Numaranız" />
                                            </div>
                                            <div className="float-left w-1/2 col:w-full px-[15px] pb-[30px] col:pb-[20px]">
                                                <input type="text" name="address" id="address" className="bg-[#ebebeb] border-0 h-[50px] py-[6px] px-[15px] text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible" placeholder="Konu" />
                                            </div>
                                            <div className="px-[15px] pb-[30px] col:pb-[20px]">
                                                <textarea className="bg-[#ebebeb] border-0 h-[150px] p-[15px]  text-[#333] text-[15px] w-full focus:outline-0 focus:shadow-none focus-visible" name="note" id="note" placeholder="Mesajınız..."></textarea>
                                            </div>
                                            <div className="submit-btn-wrapper px-[15px]">
                                                <button type="submit" className="bg-[#333333] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#111111]
                                                   col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px]">Gönder</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-span-3 md:col-span-2"></div>
                            </div>
                        </div>
                        <div className="col-span-1"></div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export async function getStaticPaths() {
    // API dosyasındaki avukat listesinden slug'ları getir
    const paths = Attorneys.map((attorney) => ({
        params: { slug: attorney.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const attorneyData = Attorneys.find(item => item.slug === params.slug) || null;
    let mdContent = null;

    try {
        mdContent = await getMarkdownContent('attorneys/' + params.slug);
    } catch (e) {
        console.error("Markdown content error:", e);
    }

    return {
        props: {
            attorneyData,
            mdContent
        }
    }
}

export default AttorneysSinglePage;
