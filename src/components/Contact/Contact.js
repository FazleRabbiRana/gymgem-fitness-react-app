import React from 'react';

const Contact = () => {
	return (
		<div className="pt-32 pb-14">
			<div className="container">
				<h2 className="text-center text-3xl md:text-4xl mb-10">
					<span className="text-my-primary">Contact</span> Us
				</h2>
				<div className="contact-form-area flex flex-col md:flex-row-reverse md:justify-center">
					<div className="contact-details flex-initial md:pl-12 lg:pl-24 mb-12 md:mb-0">
						<h3 className="text-xl italic mb-8">Get in <span className="text-my-primary">touch</span></h3>
						<div className="mt-8">
							<h4 className="text-sm mb-2">Address</h4>
							<p className="text-sm">
								GymGem Fitness Training, <br /> 
								57 Empty Street, Nowhere, <br />
								NetherRealm.
							</p>
						</div>
						<div className="mt-8">
							<h4 className="text-sm mb-2">Email</h4>
							<p className="text-sm">
								<a href="mailto:demo@dummy.com">demo@dummy.com</a>
							</p>
						</div>
						<div className="mt-8">
							<h4 className="text-sm mb-2">Phone</h4>
							<p className="text-sm">
								<a href="tel:+12029007178">+1 (202) 900 7178</a>
							</p>
						</div>
					</div>
					<div className="contact-form md:w-1/2 lg:w-2/5">
						<h3 className="text-xl italic mb-8">Let's <span className="text-my-primary">talk</span></h3>
						<form className="w-full max-w-md flex flex-col space-y-4">
							<input type="text" placeholder="Your name" className="w-full h-12 px-4 rounded bg-white text-black" />
							<input type="email" placeholder="Your email address" className="w-full h-12 px-4 rounded bg-white text-black" />
							<input type="tel" placeholder="Your mobile number" className="w-full h-12 px-4 rounded bg-white text-black" />
							<textarea placeholder="Your message" className="w-full h-40 p-4 rounded bg-white text-black"></textarea>
							<input type="submit" value="Send" className="btn-regular" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;