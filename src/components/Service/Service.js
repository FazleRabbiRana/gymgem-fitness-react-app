import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
	const {id, name, description, price, image} = props.service;

	// to service detail page on click
	const history = useHistory();
	const viewServiceDetail = () => {
		history.push(`/service/${id}`);
	}

	return (
		<div className="service card">
			<div className="card-inner">
				<div className="card-image overflow-hidden">
					<img src={image} alt={name} />
				</div>
				<div className="card-body">
					<h3 className="card-title">{name}</h3>
					<h4 className="card-price">{price}</h4>
					<p className="card-description">{description.length > 112 ? description.slice(0, 112) + '...' : description}</p>
					<button 
						onClick={viewServiceDetail}
						className="mt-4 btn-regular"
					>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default Service;