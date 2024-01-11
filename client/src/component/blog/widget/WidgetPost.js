import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const WidgetPost = () => {

  const location = useLocation();

  const [blog, setBlog] = useState([]);
    const [pagefound, setPageFound] = useState("");

    

  const [items, setItems] = useState([]);

  console.log("items", items)
  

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      const data = result.data;
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
    let API = "https://api.hirolainfotech.com/admin/admin";
    fetchBlog(API);
  }, []);
console.log("recent blogs",blog);




    return (
        <div className="post-list-wrap">
        
        {blog.slice(-5).map((data, index) => (
            <div className="single-post" key={index}>
                <div className="post-thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/blog/${slugify(data.title)}`}>
                        <img src={`${data.large_thumb[0].url}`} loading="lazy" alt="Blog" />
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


