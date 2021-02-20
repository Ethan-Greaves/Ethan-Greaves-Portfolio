import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import projectCardStyles from './projectCardStyles';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
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
							image={project.coverImage + '?h=300&fm=webp'}
							title={project.title}
							style={{ height: 225 }}
							className={`${styles.image}`}
						/>
					</LazyLoad>
					<div className={`${styles.overlay}`}>
						<div className={`${styles.content}`}>
							<Box mt={1} />
							<Typography variant='h6' color='primary' align='center'>
								{project.title}
							</Typography>
							<Typography align='center' color='secondary'>
								{project.blurb}
							</Typography>
							<Box mt={2} />
							<Grid container align='center'>
								{[faGithub, faExternalLinkAlt].map((icon) => {
									return (
										<Grid item xs={6}>
											<ExternalLink newTab={true} noopener={true} to={project.githubLink}>
												<FontAwesomeIcon icon={icon} size='3x' style={{ color: 'red' }} />
											</ExternalLink>
										</Grid>
									);
								})}
							</Grid>
						</div>
					</div>
				</CardActionArea>
			</Card>
			{/* <LazyLoad placeholder={<p>loading...</p>} once={true}>
				<img src={project.coverImage + '?h=150&w=150&auto=format'} alt={project.title} />
			</LazyLoad> */}
		</div>
	);
};

export default ProjectCard;
