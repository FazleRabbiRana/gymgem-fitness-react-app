import React from 'react';
import bannerImage from '../../images/banner.jpg';

const HomeBanner = () => {
	return (
		<section className="relative bg-cover bg-no-repeat isolate" style={{backgroundImage: `url(${bannerImage})`}}>
			<div className="banner-overlay absolute inset-0 bg-gray-200 opacity-60"></div>
			<div className="container min-h-screen text-center flex flex-col items-center justify-center isolate pt-32 pb-14">
				<h5 className="text-lg md:text-2xl text-gray-800 font-medium normal-case">Welcome to</h5>
				<h1 className="text-6xl md:text-8xl normal-case font-body">
					<span className="mr-28">Gym</span>
					<br />
					<span className="text-my-primary ml-28">Gem</span>
				</h1>
				<p className="my-4 text-black md:text-lg font-medium">We are with you by all our skills, motivation, and commitment.</p>
				<a href="#services" rel="nofollow" className="text-center mt-6 p-2 border-2 border-my-primary text-my-primary font-medium rounded-xl h-20 duration-300 hover:bg-my-primary hover:text-white">
					More
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default HomeBanner;