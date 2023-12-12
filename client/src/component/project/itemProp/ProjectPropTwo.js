import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../../utils';


const PropOne = ({projectStyle, portfolio}) => {
	
    return (
		<>
			<div className={`project-grid ${projectStyle}`}>
				<div className="thumbnail">
				<Link to={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>
					<img src={process.env.PUBLIC_URL + portfolio.image} loading="lazy" alt="icon" />
				</Link>
				</div>
				<div className="content">
				<span className="subtitle">
					{portfolio.category.map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</span>
				<h3 className="title"> 
					<Link to={process.env.PUBLIC_URL + `/project-details/${slugify(portfolio.title)}`}>{portfolio.title}</Link>
				</h3>
				</div>
			</div>
		</>
    )
}

export default PropOne;