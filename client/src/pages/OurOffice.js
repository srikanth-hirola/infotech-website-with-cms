import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';

import WhyChooseOne from '../component/whychoose/WhyChooseOne';
import ProjectOne from '../component/project/ProjectOne';
import TeamOne from '../component/team/TeamOne';
// import Reveal from 'react-reveal/Reveal';


const OurOffice = () => {

    return (
        <>
        <SEO title="Our Office" />
       
            <main className="main-wrapper">
            {/* <Reveal effect="fadeInUp" duration={900}> */}
                <HeaderOne />
                <BcrumbBannerOne 
                title="Our Office"
                paragraph ="This is the place weher we create best solution for you with our experienced Team Member"
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <WhyChooseOne />
                <ProjectOne />
                <TeamOne />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
               {/* </Reveal> */}
            </main>
        </>
    )
}

export default OurOffice;