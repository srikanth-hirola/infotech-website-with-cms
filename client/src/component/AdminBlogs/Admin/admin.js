import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Constants/header';
import EditButton from './buttons/editButton';
import Container from 'react-bootstrap/Container';
import DeleteButton from './buttons/deleteButton';
import Error from './Constants/error';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { navData } from './blogNavData';


const Admin = () => {
  const [blog, setBlog] = useState([]);
  const [pagefound, setPageFound] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBlog = async (url) => {
    try {
      const result = await axios.get(url);
      setLoading(true);
      const data = result.data;
      if (data.length > 0) {
        setBlog(data);
      } else {
        setPageFound('Notfound');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let API = 'https://api.hirolainfotech.com/admin/admin';
    fetchBlog(API);
  }, []);

  const printDate = (date) => {
    return new Date(date).toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };



  return (
    <>
      <Header navData={navData} />
      {loading ? (
        <Container>
          <div>
            <h1>Admin Panel</h1>
            {pagefound === 'Notfound' ? (
              <Error />
            ) : (
              <div className="homeContent">
                {blog.map((value, i) => {
                  return (
                    <div key={i}>
                      <div className="bloghome-parent-div">
                        <div className="bloghome-child-1">
                          <p>ID : {value?._id}</p>
                          <Link
                            to={`/admin/${value?.slug}`}
                          >
                            <p>{value?.title}</p>
                          </Link>
                          <p>
                            Last update On: <b>{printDate(value?.updatedAt)}</b>{' '}
                            by {value?.author?.author_name}
                          </p>
                          <EditButton path={`/admin/blog/edit/${value._id}`} />
                          <DeleteButton id={value._id} setLoading={setLoading} endpoint={`admin/blog/delete/${value._id}`} message="Deleted Blog Successfull" />

                        </div>
                        <div className="bloghome-child-2">
                          <div className="image-div">
                            <img
                              src={value?.large_thumb[0]?.url}
                              alt="images"
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <hr />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      ) : (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}


    </>
  );
};

export default Admin;
