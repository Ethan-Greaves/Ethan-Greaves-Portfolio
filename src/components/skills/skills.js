import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Tooltip, Grid, Box, Typography, useTheme, Container } from '@material-ui/core';
import skillsStyles from './skillsStyles';
import generalStyles from '../../commonStyles/generalStyles';

const Skills = ({ skills }) => {
	const styles = skillsStyles({
		primaryColour: useTheme().palette.primary.main,
	});
	const genStyles = generalStyles({ primaryColour: useTheme().palette.primary.main });
	const primaryColour = useTheme().palette.primary.main;

	return (
		<Container maxWidth='md'>
			<Box pt={4} />

			<div className={`${styles.section}`}>
				<Typography
					variant='h5'
					color='primary'
					className={`${styles.header} ${genStyles.underline}`}
					gutterBottom={true}
				>
					{`Skills`.toUpperCase()}
				</Typography>

				<Box mt={4} />

				<Grid container spacing={3} align='center'>
					{skills.map((skill) => {
						return (
							<Grid item xs={4} sm={3}>
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

				<Box pb={4} />
			</div>
		</Container>
	);
};

export default Skills;
