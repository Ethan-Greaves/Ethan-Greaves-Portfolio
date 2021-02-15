import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Tooltip, Grid, Box, Typography } from '@material-ui/core';
import skillsStyles from './skillsStyles';

const Skills = ({ skills }) => {
	const styles = skillsStyles();

	return (
		<div>
			<Typography variant='h5' color='primary'>
				{`Skills`.toUpperCase()}
			</Typography>

			<Box mt={2} />

			<Grid container spacing={3}>
				{skills.map((skill) => {
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
		</div>
	);
};

export default Skills;
