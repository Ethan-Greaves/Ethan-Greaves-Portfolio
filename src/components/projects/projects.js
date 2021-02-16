//#region IMPORTS
import { Box, Container, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import ProjectCard from '../projectCard/projectCard';
import Grid from '@material-ui/core/Grid';

import projectStyles from './projectsStyles';
//#endregion

const Projects = ({ projectData }) => {
	const [themePrimaryColour] = useState(useTheme().palette.primary.main);
	const styles = projectStyles({
		primaryColour: themePrimaryColour,
	});

	return (
		<Container maxWidth='md'>

			<Box pt={4} />
			
			<div>
				<Typography color='primary' variant='h5' gutterBottom={true}>
					{`Projects`.toUpperCase()}
				</Typography>

				{/* <Box pt={4}></Box> */}

				<Grid container direction='row' spacing={4} className={`${styles.projects}`}>
					{projectData.map((project) => {
						return (
							<Grid item xs={12} sm={8} md={6} lg={4}>
								<ProjectCard project={project} />
							</Grid>
						);
					})}
				</Grid>
			</div>
		</Container>
	);
};

export default Projects;
