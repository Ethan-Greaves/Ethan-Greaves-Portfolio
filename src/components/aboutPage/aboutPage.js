import { Avatar, Box, Container, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import aboutPageStyles from './aboutPageStyles';
import Skills from '../skills/skills';

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();

	return (
		<div>
			<Container maxWidth='md'>
				<Box mt={4} />
				<Typography variant='h4' color='primary'>
					{`About ${authorData.name.split(' ')[0]}`.toUpperCase()}
				</Typography>
				<Box mt={4} />

				<Grid container direction='rows' justify='space-between' spacing={6}>
					<Grid item xs={12} sm={9}>
						<Typography color='secondary'>{authorData.bio} </Typography>
					</Grid>

					<Grid item xs={12} sm={3} align='center'>
						<Avatar variant='rounded' src={authorData.image} sizes={'lg'} className={`${styles.medium}`} />
					</Grid>
				</Grid>

				<Box pt={6} />

				<Skills skills={authorData.skills} />
			</Container>
		</div>
	);
};

export default AboutPage;
