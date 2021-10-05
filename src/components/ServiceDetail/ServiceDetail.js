import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
	const {serviceId} = useParams();
	
	return (
		<div className="pt-32 pb-14">
			<div className="container">
				<h2 className="text-center">Service Detail : <span className="text-my-primary text-2xl font-body">{serviceId}</span></h2>
			</div>
		</div>
	);
};

export default ServiceDetail;