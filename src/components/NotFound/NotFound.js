import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
	const history = useHistory();

	const toHome = () => {
		history.push('/home');
	}

	return (
		<div>
			<div className="container min-h-screen text-center flex flex-col items-center justify-center pt-32 pb-14">
				<h1 className="text-6xl">
					<span>4</span>
					<span className="text-8xl text-my-primary">0</span>
					<span>4</span>
				</h1>
				<h3 className="text-2xl normal-case">Page Not Found</h3>
				<button onClick={toHome} className="btn-regular mt-8">Back to Home</button>
			</div>
		</div>
	);
};

export default NotFound;