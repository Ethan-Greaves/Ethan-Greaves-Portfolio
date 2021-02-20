import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import projectCardStyles from './projectCardStyles';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import { v4 as uuidv4 } from 'uuid';

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
							<Typography variant='h6' color='primary' align='center'>
								{project.title}
							</Typography>
							<Typography align='center' color='secondary' variant='body2'>
								{project.blurb}
							</Typography>
							<Box mt={2} />

							<Grid container>
								{[
									{ icon: faGithub, link: project.githubLink },
									{ icon: faExternalLinkAlt, link: project.externalLink },
								].map((iconLink) => {
									console.log(iconLink.link);
									return (
										<Grid item xs={6} align='center' key={uuidv4()}>
											<ExternalLink
												newTab={true}
												noopener={true}
												to={iconLink.link}
												ariaLabel={project.title}
											>
												<FontAwesomeIcon
													icon={iconLink.icon}
													size='2x'
													style={{ color: 'white' }}
												/>
											</ExternalLink>
										</Grid>
									);
								})}
							</Grid>
						</div>
					</div>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default ProjectCard;
