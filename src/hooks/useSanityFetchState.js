import { useState, useEffect } from 'react';
import useToggle from './useToggle';
import sanityClient from '../client';

const UseSanityFetchState = (request) => {
	const [data, setData] = useState([]);
	const [isLoaded, toggleIsLoaded] = useToggle(false);

	useEffect(() => {
		if (!request) return;

		try {
			const fetchData = async () => {
				const response = await sanityClient.fetch(request);
				setData(response);
				toggleIsLoaded();
			};

			fetchData();
		} catch (error) {
			console.error(error);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [data, isLoaded];
};

export default UseSanityFetchState;
