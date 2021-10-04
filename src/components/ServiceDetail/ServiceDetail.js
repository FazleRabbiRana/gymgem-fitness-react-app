import React from 'react';
import useServices from '../../hooks/useServices';
import { useParams } from 'react-router';

const ServiceDetail = () => {
	const {serviceId} = useParams();
	const myServices = useServices();
	console.log(myServices);
	
	return (
		<div className="pt-32 pb-14">
			<div className="container">
				<h2>Service Detail: {serviceId}</h2>
			</div>
		</div>
	);
};

export default ServiceDetail;