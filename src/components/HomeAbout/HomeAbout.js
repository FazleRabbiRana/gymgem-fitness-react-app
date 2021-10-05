import React from 'react';
import { useHistory } from 'react-router';
import image1 from '../../images/gym-1.jpg';

const HomeAbout = () => {
	// to about page on click
	const history = useHistory();
	const toAboutPage = () => {
		history.push('/about');
	}

	return (
		<section id="about" className="py-14 bg-white">
			<div className="container">
				<div className="flex flex-col lg:flex-row">
					<div className="flex-auto pb-6 lg:py-6 leading-loose">
						<h2 className="text-center lg:text-left text-3xl md:text-4xl mb-10">
							<span className="text-my-primary">About</span> Us
						</h2>
						<p><span className="font-semibold">GymGem Fitness &amp; Sports</span> is family owned and operated since 2001. We are committed to making participation in the event harassment free on experience for everyone. With our vast experienced team our goal is to build a healthy society.</p>
						<button onClick={toAboutPage} className="btn-regular mt-6">
							Learn More
						</button>
					</div>
					<div className="flex-shrink-0 lg:w-1/2 lg:pl-12">
						<img src={image1} alt="About us pic" className="h-full object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;