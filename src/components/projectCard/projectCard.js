import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import projectCardStyles from './projectCardStyles';
import { useTheme } from '@material-ui/core/styles';

const ProjectCard = ({ project }) => {
	const themePalette = useTheme().palette;
	const styles = projectCardStyles({
		primaryColour: themePalette.primary.main,
	});
	return (
		<div>
			<Typography variant='body2' color='primary' className={`${styles.title}`} gutterBottom={true}>
				{`${project.title}`.toUpperCase()}
			</Typography>

			<Card variant='outlined' className={`${styles.card}`}>
				<CardActionArea>
					<CardMedia image={project.coverImage} title={project.title} style={{ height: 200 }} />
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ProjectCard;
