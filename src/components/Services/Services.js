import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
	const myServices = useServices();

	return (
		<div className="pt-32 pb-14">
			<div className="container">
				<h2 className="text-3xl md:text-4xl mb-10">Our <span className="text-my-primary">Services</span></h2>
				<div className="all-services grid gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 md:gap-x-6">
					{
						myServices.map(service => <Service key={service.id} service={service} />)
					}
				</div>
			</div>
		</div>
	);
};

export default Services;