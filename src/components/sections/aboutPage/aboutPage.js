//#region IMPORTS
import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import aboutPageStyles from './aboutPageStyles';
import Section from '../../../Wrappers/section';
import buttonStyles from '../../../commonStyles/buttonStyles';
import ExternalLink from '../../../Wrappers/externalLink';
//#endregion

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();

	return (
		<Section title='about me' className={styles.text}>
			<Grid container direction='row' justify='space-between' spacing={4} className={styles.grid}>
				<Grid item xs={12} sm={9}>
					<Typography color='secondary'>{authorData.bio} </Typography>
				</Grid>

				<Grid item xs={12} sm={3} align='center'>
					<Avatar
						variant='circular'
						src={`${authorData.image}?h=300&w=300&fm=webp`}
						className={styles.profileImg}
						alt={`${authorData.name} profile image`}
					/>
				</Grid>
			</Grid>

			<Box mt={3} />

			<ExternalLink to={authorData.cv} newTab={true} noopener={true}>
				<Button className={buttonStyles().primaryBtn}>Download CV</Button>
			</ExternalLink>
		</Section>
	);
};

export default AboutPage;
