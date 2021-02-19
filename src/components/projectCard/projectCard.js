import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import projectCardStyles from './projectCardStyles';
import { useTheme } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';

const ProjectCard = ({ project }) => {
	const themePalette = useTheme().palette;
	const styles = projectCardStyles({
		primaryColour: themePalette.primary.main,
	});
	return (
		<div>
			<Typography variant='body2' color='secondary' className={`${styles.title}`} gutterBottom={true}>
				{`${project.title}`.toUpperCase()}
			</Typography>

			<Card variant='outlined' className={`${styles.card}`}>
				<CardActionArea>
					<LazyLoad placeholder={<p>loading...</p>} once={true}>
						<CardMedia
							image={project.coverImage + '?h=250&fm=webp'}
							title={project.title}
							style={{ height: 200 }}
						/>
					</LazyLoad>
				</CardActionArea>
			</Card>
			{/* <LazyLoad placeholder={<p>loading...</p>} once={true}>
				<img src={project.coverImage + '?h=150&w=150&auto=format'} alt={project.title} />
			</LazyLoad> */}
		</div>
	);
};

export default ProjectCard;
