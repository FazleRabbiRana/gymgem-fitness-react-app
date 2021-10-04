import React from 'react';
import logo from '../../images/logo-white.png';

const Footer = () => {
	return (
		<footer className="bg-gray-900 py-10 text-center">
			<div className="container">
				<div className="logo w-40 md:w-56 mx-auto">
					<img src={logo} alt="Site logo" className="max-h-16" />
				</div>
				<p className="text-gray-400 text-sm sm:text-base mt-10">
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