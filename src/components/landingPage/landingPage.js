import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
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
			<div>
				<h3 style={{ color: 'red', textAlign: 'center', marginTop: '250px' }}>
					Made By {isLoaded ? authorData[0].name : null} 🙂
				</h3>
			</div>
		);
	} else return null;
};

export default LandingPage;
