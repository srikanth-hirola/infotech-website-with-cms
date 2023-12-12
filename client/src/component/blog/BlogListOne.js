import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from '../../utils';
import { useLocation } from 'react-router-dom';

const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    const [items, setItems] = useState([]);
    const location = useLocation();
  
    // Your array of 32 items
    const allItems = allBlogData; // Replace [...] with your array of items
  
    // Function to get random items
    const getRandomItems = () => {
      const randomItems = [];
  
      while (randomItems.length < 4) {
        const randomIndex = Math.floor(Math.random() * allItems.length);
        const randomItem = allItems[randomIndex];
  
        if (!randomItems.includes(randomItem)) {
          randomItems.push(randomItem);
        }
      }
  
      setItems(randomItems);
    };
  
    // Call getRandomItems when the location changes
    useEffect(() => {
      getRandomItems();
    }, [location]);
    return (
        <>
            {items.map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                                <img src={`${process.env.PUBLIC_URL}/${data.thumb}`} loading="lazy" alt="Blog Post" />
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`} className="more-btn">
                                Learn more <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;