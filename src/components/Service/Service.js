import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Service = (props) => {
	const {id, name, description, price, image} = props.service;

	const history = useHistory();
	const viewServiceDetail = () => {
		history.push(`/service/${id}`);
	}

	return (
		<div className="service card">
			<div className="inner">
				<div className="card-image">
					<img src={image} alt={name} />
				</div>
				<div className="card-body">
					<h3>{name}</h3>
					<h4>{price}</h4>
					<p>{description.length > 25 ? description.slice(0, 25) + '...' : description}</p>
					<button 
						onClick={viewServiceDetail}
						className="py-2 px-8 bg-my-primary bg-opacity-80 text-white text-sm rounded duration-300 hover:bg-opacity-100"
					>
						View Details
					</button>
					<Link to={`/service/${id}`}>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;