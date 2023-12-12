import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import NewsData from "../data/news/news.json";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop/ScrollToTop";
import FooterCta from "../component/cta/FooterCta";
import BannerThree from "../component/banner/BannerThree";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";

const allNewsData = NewsData;
// const allData = HomeData;

const News = ({ itemShow }) => {
  return (
    <>
     
      <Helmet>
        <title>
          Hirola Infotech Solutions | Best Digital Marketing Agency Bangalore
        </title>
        <meta
          name="description"
          content="Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth."
          data-rh="true"
        />
      </Helmet>
     
      <main className="main-wrapper">
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <HeaderOne />
        <BcrumbBannerOne
          title="Breaking the Barriers of Technology"
          paragraph="Welcome to Hirola InfoTech Solutions, your ultimate destination for the latest news, insights, and solutions in the world of technology. As a leading provider of innovative tech services, we are dedicated to empowering businesses and individuals with cutting-edge solutions that drive growth and success."
          styleClass="thumbnail-4"
          mainThumb="/images/banner/hirola-icon.png"
        />
        <div className="container pt--100 ">
          <h2 className="PressRoom">Press Room</h2>
          {/* hided three column row */}
          <div className="row d-none">
            {allNewsData.slice(0, itemShow).map((data, index) => (
              <>
                <div className="col-md-4  justify-content-center">
                  <a href={data.link} target="_blank">
                    <div className="news-card mb--30">
                      <div class="">
                        <Link to="">
                          <img
                            className="light-version-logo light-version-logo1"
                            src={data.Dimage}
                            loading="lazy"
                            alt="logo"
                          />
                        </Link>
                        <div class="card_content">
                          <h3 className="title">{data.title}</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
          {/* hided three column row */}

          <div className="row">
            {allNewsData.slice(0, itemShow).map((data, index) => (
              <>
                <div className="col-md-3  justify-content-center">
                  <a href={data.link} target="_blank">
                    <div className="news-card mb--30">
                      <div class="">
                        <Link to="">
                          <img
                            className="light-version-logo light-version-logo1"
                            src={data.Dimage.url}
                            loading="lazy"
                            alt="logo"
                          />
                        
                        </Link>
                        <div class="card_content">
                          <h3 className="title sb-tle">{data.title}</h3>
                          {/* <span class="card_title">{data.description.slice(0,150)}...</span> */}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>

        <ScrollToTop />

        <FooterCta />

        {/* contact form with newwletter section */}

        <FooterOne parentClass="" />
        <ScrollToTop />
        {/* </Reveal> */}
      </main>
    </>
  );
};

export default News;
