import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Footer from '../../components/footer/Footer';
import Cases from '../../api/case';
import Sidebar from './Sidebar';
import RecentCase from './Recent';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Image from 'next/image';
import { getMarkdownContent } from '../../utils/mdParser';


const CaseSinglePage = ({ caseData, mdContent }) => {

    const router = useRouter()

    const data = mdContent || {};

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={data.title || caseData?.cTitle} pagesub={'Emsal Kararlar'} />
            <div className="py-[100px] md:py-[80px]">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-8 md:col-span-12 order-1">
                            {caseData?.cImg && (
                                <Image className="w-full max-h-[400px] object-cover" src={caseData.cImg} alt="" />
                            )}
                            <div className="pt-[50px]">
                                <h2 className="text-[36px] text-[#333333] mb-[25px]">{data.title || caseData?.cTitle}</h2>
                                <h5 className="text-[22px] font-base-font leading-[40px] text-[#333333] mb-[25px]">{data.subTitle || caseData?.sub}</h5>

                                {data.summary && (
                                    <p className="text-[16px] leading-[30px] py-[20px] mb-[16px] text-[#666]">{data.summary}</p>
                                )}

                                {data.contentHtml && (
                                    <div className="text-[16px] leading-[30px] mb-[25px] text-[#666]" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
                                )}

                            </div>
                        </div>
                        <Sidebar />
                    </div>
                    <RecentCase />
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export async function getStaticPaths() {
    const paths = Cases.map((c) => ({
        params: { slug: c.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const caseData = Cases.find(item => item.slug === params.slug) || null;
    let mdContent = null;

    try {
        mdContent = await getMarkdownContent('cases/' + params.slug);
    } catch (e) {
        console.error("Markdown content error:", e);
    }

    return {
        props: {
            caseData,
            mdContent
        }
    }
}

export default CaseSinglePage;
