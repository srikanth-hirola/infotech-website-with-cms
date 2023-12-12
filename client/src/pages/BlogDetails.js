import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BlogData from "../data/blog/BlogData.json";
import BreadCrumbOne from "../elements/breadcrumb/BreadCrumbOne";
import BlogSidebar from "../component/blog/BlogSidebar";
import BlogAuthor from "../component/blog/BlogAuthor";

import { Helmet } from "react-helmet-async";
import { FaPlay, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import BlogListOne from "../component/blog/BlogListOne";
import FooterCta from "../component/cta/FooterCta";
import { slugify } from "../utils";
// import Reveal from 'react-reveal/Reveal';

const allBlogData = BlogData;

const BlogDetails = () => {
  // this is for using slug of the blog

  // const params = useParams();
  // const blogId = params.slug;

  // const getBlogData = allBlogData.filter(blog => blog.slug === blogId);
  // const detailsBlog = getBlogData[0];

  // this is for using slugify with title of the blog

  const params = useParams();
  const blogSlug = params.slug;

  const getBlogData = allBlogData.filter(
    (data) => slugify(data.title) === blogSlug
  );
  const detailsBlog = getBlogData[0];

  const [toggler, setToggler] = useState(false);

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  }

  var slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  return (
    <>
      <Helmet>
        <title>{detailsBlog.metaTitle}</title>
        <meta
          name="description"
          content={detailsBlog.metaDescription}
          data-rh="true"
        />
      </Helmet>

      <main className="main-wrapper">
        <HeaderOne />
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <BreadCrumbOne title={detailsBlog.title} page="Blog" />
        <div className="section-padding-equal">
          <div className="container">
            <div className="row row-40">
              <div className="col-lg-8">
                <div className="single-blog">
                  <div className="single-blog-content blog-grid">
                    <div className="post-thumbnail">
                      {/* {
                                                Array.isArray(detailsBlog.large_thumb) ? 
                                                <Slider {...slideSettings} className="slick-arrow-nav">
                                                    {detailsBlog.large_thumb.map((data, index) => (
                                                        <div className="slide-item" key={index}>
                                                            <img src={`${process.env.PUBLIC_URL}/${data}`} loading="lazy" alt="Blog" />
                                                        </div>
                                                    ))}
                                                    
                                                </Slider> 
                                                : <img src={`${process.env.PUBLIC_URL}/${detailsBlog.large_thumb}`} loading="lazy" alt="Blog" />
                                            } */}

                                            {Array.isArray(detailsBlog.thumb) ? (
        <Slider {...slideSettings} className="slick-arrow-nav">
            {detailsBlog.thumb.map((data, index) => (
                <div className="slide-item" key={index}>
                    <img src={data.url} loading="lazy" alt="Blog" />
                </div>
            ))}
        </Slider>
    ) : (
        <img src={detailsBlog.thumb.url} loading="lazy" alt="Blog" />
    )}

                      {detailsBlog.format === "video" ? (
                        <>
                          <div className="popup-video">
                            <button
                              className="play-btn"
                              onClick={() => setToggler(!toggler)}
                            >
                              <FaPlay />
                            </button>
                          </div>
                          <FsLightbox
                            toggler={toggler}
                            sources={[
                              "https://www.youtube.com/watch?v=1iIZeIy7TqM",
                            ]}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="author">
                      <div className="author-thumb">
                        <img
                          src={`${process.env.PUBLIC_URL}/${detailsBlog.author_avatar}`}
                          loading="lazy"
                          alt="Blog Author"
                          className="aathr"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {detailsBlog.author_name}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          <li>{detailsBlog.post_date}</li>
                          <li>{detailsBlog.read_time}</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 mb-2">
                      {/* <p>{detailsBlog.blogSubDescription}</p> */}
                    </p>
                    {/* <p>{detailsBlog.blogDescription}</p> */}
                    {detailsBlog.body.map((data, i) => (
                      <div
                        key={i}
                        dangerouslySetInnerHTML={{ __html: data }}
                      ></div>
                    ))}

                    <div className="row">
                      {detailsBlog.features_img.map((img, i) => (
                        <div className="col-6" key={i}>
                          <div className="featured-img">
                            <img
                              src={process.env.PUBLIC_URL + img}
                              loading="lazy"
                              alt="Blog"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <BlogAuthor data={detailsBlog} />
              </div>
              <div className="col-lg-4">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>

        <div className="section section-padding-equal pt-0 related-blog-area">
          <div className="container">
            <div className="section-heading heading-left">
              <h3 className="title">Related Post</h3>
            </div>
            <div className="row g-0">
              <BlogListOne colSize="col-xl-6" itemShow="2" />
            </div>
          </div>
        </div>
        <FooterCta />
        <FooterOne parentClass="" />
        {/* </Reveal> */}
      </main>
    </>
  );
};

export default BlogDetails;
