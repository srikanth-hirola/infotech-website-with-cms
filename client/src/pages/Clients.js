import React from 'react';
import clientsData from '../data/clients/Clients.json'
import SectionTitle from '../elements/section-title/SectionTitle';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import HeaderOne from '../common/header/HeaderOne';
import FooterOne from '../common/footer/FooterOne';
import FooterCta from '../component/cta/FooterCta';
import BannerThree from '../component/banner/BannerThree';

import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
// import Reveal from 'react-reveal/Reveal';
const ClientsData = clientsData;

const Clients = () => {
    return (
        <>
        <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <SEO/>
                <BcrumbBannerOne 
                title="Our Clients"
                paragraph ="Hirola InfoTech Solutions is an Digital Marketing Agency that offers a range of solutions to clients in various industries. Some of their clients may include small and medium-sized businesses, startups, non-profit organizations, and government agencies.
As a provider of IT services, Hirola InfoTech Solutions may offer services such as web development, software development, mobile app development, cloud computing, cybersecurity, digital marketing, and IT consulting. Their clients may come from diverse industries such as healthcare, finance, education, retail, hospitality, and more."
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
               
         <SectionTitle
                            subtitle=""
                            title="Clients We Served"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
            <div className='container'>
            <div className='row'>
             {ClientsData.map((data, index) => (
               <>

               <div className="col-lg-2 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.imageUrl} loading="lazy" alt="Brand" className='mt-3 mb-3'/>
                    </div>
                </div>
                

                </>
            ))}
             </div>
            </div>
         <FooterCta/>
         <FooterOne/>
        {/* </Reveal> */}
            </main>
        </>
    )
}

export default Clients;