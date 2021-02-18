//#region IMPORTS
import { Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ProjectCard from '../projectCard/projectCard';
import Grid from '@material-ui/core/Grid';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import projectStyles from './projectsStyles';
//#endregion

const Projects = ({ projectData }) => {
	const styles = projectStyles();

	return (
		<VerticallyPaddedContainer>
			<Typography color='primary' variant='h5' gutterBottom={true} className={`${generalStyles().underline}`}>
				{`Projects`.toUpperCase()}
			</Typography>

			<Box mt={4} />

			<Grid container direction='row' spacing={4} className={`${styles.projects}`}>
				{projectData.map((project) => {
					return (
						<Grid item xs={12} sm={8} md={6} lg={4}>
							<ProjectCard project={project} />
						</Grid>
					);
				})}
			</Grid>
		</VerticallyPaddedContainer>
	);
};

export default Projects;
