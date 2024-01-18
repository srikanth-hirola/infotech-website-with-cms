import React from 'react'
import { Link } from 'react-router-dom'
import BlogForm from '../contact/BlogForm'

const BannerNew = () => {
  return (
    <>
    <div className="service-new-banner">
      <div className="service-new-banner-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="service-new-banner-sec-text">
                <h2>
                We are an <span>Awarded</span> Creative Agency
                </h2>
                <p>We Help You Build & Grow An Online Business</p>
                <Link to=''>Check It Out</Link>
              </div>
            </div>
            <div className="col-md-6">
              {/* <div className="service-new-banner-sec-image">
              <div className="bg-gradient-one">
                <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1705404442/service-bg-2_rfd6mf.png" alt="bg-gradient" />
              </div>
              <div className="bg-gradient-two">
                <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1705404441/service-banner-star_tvkmsx.png" alt="bg-gradient" />
              </div>

              <div className="bg-gradient-three">
                <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1705404442/service-banner_hl2eek.png" alt="bg-gradient" />
              </div>
              <div className="bg-gradient-four">
                <img src="https://res.cloudinary.com/dq6ok3jsu/image/upload/v1705404442/service-bg-1_cek3r9.png" alt="bg-gradient" />
              </div>
              </div> */}
              {/* <BlogForm/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BannerNew