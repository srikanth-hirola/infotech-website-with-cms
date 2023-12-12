import React from 'react';
import { Link } from 'react-router-dom';
import WidgetPost from './widget/WidgetPost';
import WidgetCategory from './widget/WidgetCategory';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube} from "react-icons/fa";

const BlogSidebar = () => {
    return (
        <div className="axil-sidebar">
           
            <div className="widget widget-categories">
                <h4 className="widget-title">Categories</h4>
                <WidgetCategory />
            </div>
            <div className="widget widge-social-share">
                <div className="blog-share">
                    <h6 className="title text-white">Follow :</h6>
                    <ul className="social-list list-unstyled">
                        <li><a href="https://www.facebook.com/Hirolagroups"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/HirolaInfotech"><FaTwitter /></a></li>
                        <li><a href="https://www.instagram.com/hirolainfotechsolutions/"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/company/74702072/admin/"><FaLinkedinIn /></a></li>
                        <li><a href="https://in.pinterest.com/hirolainfotechsolutions/"><FaPinterest /></a></li>
                        <li><a href="https://www.youtube.com/channel/UC08x8FXOmwXGCy3HX575K7Q/"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent post</h4>
                <WidgetPost />
            </div>
            <div className="widget widget-banner-ad">
                <Link to="#">
                    <img src={process.env.PUBLIC_URL + "/images/banner/widget-banner.png"} loading="lazy" alt="banner" />
                </Link>
            </div>
        </div>
    )
}

export default BlogSidebar;