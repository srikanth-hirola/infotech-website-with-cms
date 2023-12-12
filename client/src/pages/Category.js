import React from 'react';
import { useParams } from 'react-router-dom';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BlogGridTwoo from '../component/blog/BlogGridTwoo';
import BlogData from "../data/blog/BlogData.json";
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

import {slugify} from '../utils';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';


const allBlogData = BlogData;

const BlogCategory = () => {

    const params = useParams();
    const blogSlug = params.slug;

    const getBlogData = allBlogData.filter(blog => slugify(blog.category) === blogSlug);


    return (
        <>
        <SEO title="Category" />
       
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
                <BreadCrumbOne 
                title="Category"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                        <div className="row">
                            <BlogGridTwoo data={getBlogData} colSize="col-lg-4"/>
                        </div>
                    </div>
                </div>
                <FooterCta/>
            <FooterOne parentClass="" />
           {/* </Reveal> */}
            </main>
        </>
    )
}

export default BlogCategory;