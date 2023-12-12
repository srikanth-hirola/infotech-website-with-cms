import React from 'react';
import LocationData from '../../data/contact/LocationData.json';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const allData = LocationData;

const ContactLocation = () => {
    return (
        <>
            {allData.slice(0,4).map((data, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}><img src={process.env.PUBLIC_URL + data.thumb} loading="lazy" alt="Office" /></Link>
                        </div>
                        <div className="content">
                        <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}><h4 className="title">{data.title}</h4></Link>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;