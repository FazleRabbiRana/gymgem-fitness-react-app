import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const {id, name, description, price, image} = props.service;

	return (
		<div className="service card">
			<div className="card-inner">
				<div className="card-image overflow-hidden">
					<img src={image} alt={name} />
				</div>
				<div className="card-body">
					<h3 className="card-title">{name}</h3>
					<h4 className="card-price">{price}</h4>
					<p className="card-description">{description.length > 111 ? description.slice(0, 111) + '...' : description}</p>
					<Link to={`/service/${id}`} className="btn-regular mt-4">
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;