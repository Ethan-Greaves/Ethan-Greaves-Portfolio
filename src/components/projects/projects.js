//#region IMPORTS
import { Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import UseSanityFetchState from '../../hooks/useSanityFetchState';
//#endregion

const Projects = () => {
	const [themePrimaryColour] = useState(useTheme().palette.primary.main);
	const [projectData, projectDataIsLoaded] = UseSanityFetchState(``)

	return (
		<Typography style={{ color: `${themePrimaryColour}`, textAlign: 'center' }} variant='h3'>
			Projects
		</Typography>
	);
};

export default Projects;
