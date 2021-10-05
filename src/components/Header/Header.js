import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	// nav menu link active style
	const activeLinkStyle = {
		color: '#F63C25'
	}

	// toggle active state on click
	const [active, setActive] = useState(false);
	const toggleActive = () => {
		setActive(!active);
	}

	return (
		<header className="bg-white py-2 shadow w-full z-40 fixed top-0">
			<nav className="container flex items-center justify-between">
				<Link exact to="/" className="logo inline-block w-40 md:w-56">
					<img src={logo} alt="Site logo" className="max-h-16" />
				</Link>
				<div className={active ? 'main-menu-wrapper fixed md:static active' : 'main-menu-wrapper fixed md:static'}>
					<ul className="main-menu flex flex-col md:flex-row md:items-center md:justify-end md:space-x-5 space-y-2 md:space-y-0">
						<li>
							<NavLink 
								to="/home" 
								activeStyle={activeLinkStyle}
								className="nav-link hover:text-my-primary"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink 
								to="/about" 
								activeStyle={activeLinkStyle}
								className="nav-link hover:text-my-primary"
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink 
								to="/services" 
								activeStyle={activeLinkStyle}
								className="nav-link hover:text-my-primary"
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink 
								to="/contact" 
								activeStyle={activeLinkStyle}
								className="nav-link hover:text-my-primary"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="burger-menu md:hidden">
					<button onClick={toggleActive} className="main-menu-toggler hover:text-my-primary">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Header;