//#region IMPORTS
import { Box, Container, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import ProjectCard from '../projectCard/projectCard';
import Grid from '@material-ui/core/Grid';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import projectStyles from './projectsStyles';
//#endregion

const Projects = ({ projectData }) => {
	const genStyles = generalStyles({ primaryColour: useTheme().palette.primary.main });
	const [themePrimaryColour] = useState(useTheme().palette.primary.main);
	const styles = projectStyles({
		primaryColour: themePrimaryColour,
	});

	return (
		<VerticallyPaddedContainer maxWidth='md'>
			<div>
				<Typography color='primary' variant='h5' gutterBottom={true} className={`${genStyles.underline}`}>
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
			</div>
		</VerticallyPaddedContainer>
	);
};

export default Projects;
