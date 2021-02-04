import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import ParticleStars from '../../particles/stars';
import './landingPage.scss';
import '../../commonStyles/positions.scss';

const LandingPage = () => {
	const [authorData, setAuthor] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "author"]`)
			.then((response) => setAuthor(response))
			.then(() => setIsLoaded(true))
			.catch((e) => console.error(e));
	}, [authorData]);

	if (isLoaded) {
		return (
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
				}}
			>
				<ParticleStars />
				<h3 style={{ color: 'red', textAlign: 'center' }}>Made By {isLoaded ? authorData[0].name : null} 🙂</h3>
			</div>
		);
	} else return null;
};

export default LandingPage;
