import React from 'react';
import image1 from '../../images/gym-1.jpg';
import image2 from '../../images/gym-2.jpg';

const About = () => {
	return (
		<div className="pt-32 pb-14">
			<div className="container">
				<h2 className="text-center text-3xl md:text-4xl mb-10">
					<span className="text-my-primary">About</span> Us
				</h2>
				<div className="flex flex-col lg:flex-row">
					<div className="flex-auto pb-6 lg:py-6 leading-loose">
						<h3 className="text-xl mb-6">A glorious journey since <span className="font-body">2001</span></h3>
						<p><span className="font-semibold">GymGem Fitness &amp; Sports</span> is family owned and operated since 2001. We are committed to making participation in the event harassment free on experience for everyone. With our vast experienced team our goal is to build a healthy society.</p>
						<p className="mt-6">We are nurturers: we seek only to encourage, entertain, and empower. We know serious fitness is hard, but that doesn’t mean it can’t be an edge-of-your-seat, can’t-get-enough, look-forward-to-your-workouts party.</p>
					</div>
					<div className="flex-shrink-0 lg:w-1/2 lg:pl-12">
						<img src={image1} alt="About us pic" className="h-full object-cover" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse mt-16 lg:mt-20">
					<div className="flex-auto pb-6 lg:py-6 leading-loose lg:text-right">
						<h3 className="text-xl mb-6">Our gym is your gym</h3>
						<p>We believe in a friendly community! With a gym designed around you, we think you’ll love it here. Here we keep open minds. There is no one type or way in our diverse community. Come as you are! </p>
						<p className="mt-6">GymGem only accepts top quality entrepreneurs who are committed to creating a premier fitness facility that benefits their community first, and themselves second. Those who meet our requirements are eligible for the opportunity.</p>
					</div>
					<div className="flex-shrink-0 lg:w-1/2 lg:pr-12">
						<img src={image2} alt="About us pic" className="h-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;