import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogData from "../../../data/blog/BlogData.json";
import { slugify } from '../../../utils';


import { useLocation } from 'react-router-dom';
const allBlogData = BlogData;


const WidgetPost = () => {

  const [items, setItems] = useState([]);
  const location = useLocation();

  // Your array of 32 items
  const allItems = allBlogData; // Replace [...] with your array of items

  // Function to get random items
  const getRandomItems = () => {
    const randomItems = [];

    while (randomItems.length < 12) {
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
        <div className="post-list-wrap">
        
        {items.map((data, index) => (
            <div className="single-post" key={index}>
                <div className="post-thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                        <img src={`${data.thumb.url}`} loading="lazy" alt="Blog" />
                    </Link>
                </div>
                <div className="post-content">
                    <h6 className="title">
                    <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                        {data.title}
                    </Link>
                    </h6>
                    <ul className="blog-meta list-unstyled">
                        <li>{data.post_date}</li>
                        <li>{data.read_time}</li>
                    </ul>
                </div>
            </div>
        ))}
    </div>
    )
}

export default WidgetPost;


