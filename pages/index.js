import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import Features from '../components/Features/Features';
import About from '../components/about/about';
import Practice from '../components/Practice';
import ConsultingArea from '../components/ConsultingArea/ConsultingArea';
import FunFact from '../components/FunFact';
import Newsletter from '../components/Newsletter/Newsletter';
import Scrollbar from '../components/scrollbar/scrollbar';
import Footer from '../components/footer/Footer';
import { getMarkdownContent } from '../utils/mdParser';

const HomePage = ({ homeData }) => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <Hero data={homeData} />
            <Features />
            <About data={homeData} />
            <Practice />
            <ConsultingArea />
            <FunFact />
            <Newsletter />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export async function getStaticProps() {
    const homeData = await getMarkdownContent('home');
    return {
        props: {
            homeData: homeData || {},
        },
    };
}

export default HomePage;