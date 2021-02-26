//#region IMPORTS
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Section from '../../../Wrappers/section';
const ProjectCard = React.lazy(() => import('../../projectCard/projectCard'));
//#endregion

const Projects = ({ projectData }) => {
	return (
		<Section title='projects'>
			<Grid container direction='row' spacing={4}>
				{projectData.map((project, i) => {
					return (
						<Grid item xs={12} sm={6} md={4} key={i}>
							<ProjectCard project={project} />
						</Grid>
					);
				})}
			</Grid>
		</Section>
	);
};

export default Projects;
