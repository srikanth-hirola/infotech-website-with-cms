import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
// import BlogData from "../data/blog/BlogData.json";
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
import axios from "axios";
import { sanitize } from "dompurify";
// import Reveal from 'react-reveal/Reveal';

// const allBlogData = BlogData;

const BlogDetails = () => {
  // this is for using slug of the blog

  // const params = useParams();
  // const blogId = params.slug;

  // const getBlogData = allBlogData.filter(blog => blog.slug === blogId);
  // const detailsBlog = getBlogData[0];

  // this is for using slugify with title of the blog

  const [allBlogData, setBlog] = useState([]);
  console.log("complete blog data", allBlogData)
  const [pagefound, setPageFound] = useState("");
  const [loading, setLoading] = useState(false);
  
  const params = useParams();
  const blogSlug = params.slug;

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      setLoading(true);
      const data = result.data;
      console.log("blog details page", data)
      if (data.length > 0) {
        setBlog(data);
      } else {
        setPageFound("Notfound");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let API = "http://localhost:8000/admin/admin";
    fetchBlog(API);
  }, []);

  const getBlogData = allBlogData.filter(
    (data) => slugify(data.title) === blogSlug
  );
  console.log("getblogdata", getBlogData)
  const detailsBlog = getBlogData[0];
  console.log("detailsblog", detailsBlog)

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
        <title>{detailsBlog?.metaTitle}</title>
        <meta
          name="description"
          content={detailsBlog?.metaDescription}
          data-rh="true"
        />
      </Helmet>

      <main className="main-wrapper">
        <HeaderOne />
        {/* <Reveal effect="fadeInUp" duration={900}> */}
        <BreadCrumbOne title={detailsBlog?.title} page="Blog" />
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

                                            {Array.isArray(detailsBlog?.large_thumb) ? (
        <Slider {...slideSettings} className="slick-arrow-nav">
            {detailsBlog?.large_thumb.map((data, index) => (
                <div className="slide-item" key={index}>
                    <img src={data.url} loading="lazy" alt="Blog" />
                </div>
            ))}
        </Slider>
    ) : (
        <img src={detailsBlog?.large_thumb[0].url} loading="lazy" alt="Blog" />
    )}

                      {detailsBlog?.format === "video" ? (
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
                          src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1702638627/logo_dvdzrb.svg"
                          loading="lazy"
                          alt="Blog Author"
                          className="aathr"
                        />
                      </div>
                      <div className="info">
                        <h6 className="author-name">
                          {detailsBlog?.author.author_name}
                        </h6>
                        <ul className="blog-meta list-unstyled">
                          {/* <li>{detailsBlog?.post_date}</li> */}
                          <li>{detailsBlog?.read_time}</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-2 mb-2">
                      {/* <p>{detailsBlog.blogSubDescription}</p> */}
                    </p>
                    {/* <p>{detailsBlog.blogDescription}</p> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: sanitize(detailsBlog?.body),
                        }}
                      ></div>
                   

                    <div className="row">
                        <div className="col-6">
                          <div className="featured-img">
                            <img
                              src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1701951614/blog-8_iwnpyz.png"
                              loading="lazy"
                              alt="blog image"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="featured-img">
                            <img
                              src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1701951615/blog-9_djyuyq.png"
                              loading="lazy"
                              alt="blog image"
                            />
                          </div>
                        </div>
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
