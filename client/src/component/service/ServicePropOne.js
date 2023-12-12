import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain.json";
import Tilty from 'react-tilty';

const AllData = ServiceData;

const ServicePropOne = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			{AllData.slice(0, itemShow).map((data, index) => (
                       
				<div className={`${colSize} ${topMargin(index)} service-head` } key={index} >
				{/* <Tilty perspective={12000} reset={true}> */}
					<div className={`services-grid service-grid-two ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} loading="lazy" alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + "/services/"}>{data.title}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + "/services/"} className="more-btn">Find out more</Link>
						</div>
					</div>
                    {/* </Tilty> */}
			 	</div>
			
			))}
		</>
    )
}

export default ServicePropOne;