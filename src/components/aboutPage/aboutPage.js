import { Avatar, Box, Container, Grid, Typography, Tooltip } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import aboutPageStyles from './aboutPageStyles';

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		small: {
			width: theme.spacing(10),
			height: theme.spacing(10),
		},

		medium: {
			width: theme.spacing(25),
			height: theme.spacing(25),
		},

		large: {
			width: theme.spacing(30),
			height: theme.spacing(30),
		},
	}));

	const classes = useStyles();

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
						<Avatar variant='rounded' src={authorData.image} sizes={'lg'} className={`${classes.medium}`} />
					</Grid>
				</Grid>

				<Box pt={6} />

				<Typography variant='h5' color='primary'>
					{`Skills`.toUpperCase()}
				</Typography>

				<Box mt={2} />

				<Grid container spacing={3}>
					{authorData.skills.map((skill) => {
						return (
							<Grid item xs={4} sm={2}>
								<Tooltip title={skill} TransitionComponent={Zoom}>
									<img
										className={`${styles.skillImg}`}
										src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${skill.toLowerCase()}/${skill.toLowerCase()}.png`}
										alt={skill}
									/>
								</Tooltip>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default AboutPage;
