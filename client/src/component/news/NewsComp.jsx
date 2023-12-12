import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

import Data from "../../data/news/news.json";
import { Link } from "react-router-dom";
const newsData = Data;

const News = ({ colSize, itemShow, testimonialData, layoutStyle }) => {
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
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...slideSettings} className="slick-arrow-nav">
        {newsData.slice(0, itemShow).map((data, index) => (
          <div className="col-md-6 justify-content-center crp" style={{cursor:"pointer"}}>
           <a href={data.link} target='_blank'>
           <div className="news-card news-card-home">
            <div class="">
            <Link to={process.env.PUBLIC_URL + "/news"}>
                                        <img className="light-version-logo light-version-logo1 log-1" src={data.Dimage.url} loading="lazy" alt="logo" />
        </Link>
            <div class="card_content">
<h3 className="title">{data.title}</h3>
<span class="card_title">{data.description.slice(0,130)}...</span>
</div>
            </div>
            </div>
           </a>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default News;
