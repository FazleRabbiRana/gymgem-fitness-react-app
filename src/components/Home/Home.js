import React from 'react';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
	return (
		<>
			<HomeBanner />
			<HomeAbout />
			<HomeServices />
		</>
	);
};

export default Home;