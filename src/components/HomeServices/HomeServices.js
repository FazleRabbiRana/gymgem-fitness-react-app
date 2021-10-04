import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const HomeServices = () => {
	// from custom hook
	const myServices = useServices();

	return (
		<section id="services" className="py-14">
			<div className="container">
				<h2 className="text-center text-3xl md:text-4xl mb-10">
					Our <span className="text-my-primary">Services</span>
				</h2>
				<div className="all-services grid gap-y-12 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-x-6">
					{
						myServices.slice(0, 4).map(service => <Service key={service.id} service={service} />)
					}
				</div>
			</div>
		</section>
	);
};

export default HomeServices;