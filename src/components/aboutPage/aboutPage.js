import { Avatar, Box, Container, Grid, Typography, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import aboutPageStyles from './aboutPageStyles';
import generalStyles from '../../commonStyles/generalStyles';

import Skills from '../skills/skills';

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();
	const genStyles = generalStyles({ primaryColour: useTheme().palette.primary.main });
	return (
		<Container maxWidth='md'>
			<Box pt={4} />

			<div className={`${styles.text}`}>
				<Typography variant='h5' color='primary' className={`${genStyles.underline}`}>
					{`About me`.toUpperCase()}
				</Typography>
				<Box mt={4} />

				<Grid container direction='rows' justify='space-between' spacing={4} className={`${styles.grid}`}>
					<Grid item xs={12} sm={9}>
						<Typography color='secondary'>{authorData.bio} </Typography>
					</Grid>

					<Grid item xs={12} sm={3} align='center'>
						<Avatar variant='circle' src={authorData.image} className={`${styles.small}`} />
					</Grid>
				</Grid>
			</div>

			<Box pt={4} />

			{/* <Skills skills={authorData.skills} /> */}
		</Container>
	);
};

export default AboutPage;
