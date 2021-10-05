import React from 'react';
import logo from '../../images/logo-white.png';

const Footer = () => {
	return (
		<footer className="bg-gray-900 py-8">
			<div className="container">
				<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-around">
					<div className="md:w-1/2 max-w-md md:pr-6">
						<div className="logo w-40 md:w-56 mx-auto md:mx-0">
							<img src={logo} alt="Site logo" className="max-h-16" />
						</div>
						<p className="text-sm mt-3"><span className="font-semibold">GymGem Fitness &amp; Sports</span> is family owned and operated since 2001. We are committed to making participation in the event harassment free on experience for everyone. Our goal is to build a healthy society.</p>
					</div>
					<div className="md:w-1/2 max-w-md">
						<h4 className="text-sm text-gray-300 mb-3">Subscribe for Newsletter</h4>
						<form className="w-full md:flex">
							<input type="email" placeholder="Email address" className="w-full md:w-auto md:flex-auto h-10 px-4 rounded rounded-bl bg-white text-black" />
							<button type="submit" className="btn-regular mt-2 md:mt-0 md:-ml-1">Subscribe</button>
						</form>
					</div>
				</div>
				<p className="text-center text-gray-400 text-sm sm:text-base mt-12">
					&copy; {new Date().getFullYear()}&nbsp;&nbsp;
					<span className="text-my-primary">Fazle Rabbi Rana</span>&nbsp;&nbsp;
					<br className="sm:hidden" />
					All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;