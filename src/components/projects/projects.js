//#region IMPORTS
import React, { Suspense } from 'react';
import Grid from '@material-ui/core/Grid';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/verticalPaddedContainer';
import projectStyles from './projectsStyles';
import { Box, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
const ProjectCard = React.lazy(() => import('../projectCard/projectCard'));

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
						<Grid item xs={12} sm={6} md={4} key={uuidv4()}>
							<ProjectCard project={project} />
						</Grid>
					);
				})}
			</Grid>
		</VerticallyPaddedContainer>
	);
};

export default Projects;
