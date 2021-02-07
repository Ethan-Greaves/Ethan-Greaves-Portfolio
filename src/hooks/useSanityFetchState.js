import React, { useState, useEffect } from 'react';
import useToggle from './useToggle';
import sanityClient from '../client';

const UseSanityFetchState = (requestedData) => {
	const [data, setData] = useState([]);
	const [isLoaded, toggleIsLoaded] = useToggle(false);

	useEffect(() => {
		if (!requestedData) return;

		try {
			const fetchData = async () => {
				const response = await sanityClient.fetch(requestedData);
				setData(response);
				toggleIsLoaded();
			};

			fetchData();
		} catch (error) {
			console.error(error);
		}
	}, []);

	return [data, isLoaded];
};

export default UseSanityFetchState;
