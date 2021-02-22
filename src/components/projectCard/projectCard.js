import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import projectCardStyles from './projectCardStyles';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import Skill from '../skill/skill';
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
					{/* Image */}
					<LazyLoad placeholder={<p>loading...</p>} once={true}>
						<CardMedia
							image={project.coverImage + '?h=300&fm=webp'}
							title={project.title}
							style={{ height: 225 }}
							className={`${styles.image}`}
						/>
					</LazyLoad>

					{/* Overlay */}
					<div className={`${styles.overlay}`}>
						<div className={`${styles.content}`}>
							{/* Title */}
							<Typography variant='h6' color='primary' align='center'>
								{project.title}
							</Typography>
							{/* Blurb */}
							<Typography align='center' color='secondary' variant='body2'>
								{project.blurb}
							</Typography>
							<Box mt={2} />

							{/* Social links */}
							<Grid container justify='center' align='center'>
								{[
									{ icon: faGithub, link: project.githubLink },
									{ icon: faExternalLinkAlt, link: project.externalLink },
								].map((iconLink) => {
									return (
										<Grid item xs={3} key={uuidv4()}>
											<ExternalLink newTab noopener to={iconLink.link} ariaLabel={project.title}>
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
