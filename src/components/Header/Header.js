import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
	return (
		<header className="bg-yellow-50">
			<nav className="container mx-auto">
				<div className="logo">
					<img src={logo} alt="Site logo" />
				</div>
				<div className="main-menu">
					<ul className="flex items-center justify-end">
						<li>
							<NavLink to="/home">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about">
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/services">
								Services
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;