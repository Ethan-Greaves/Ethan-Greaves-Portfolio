import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Tooltip, Grid, Box, Typography } from '@material-ui/core';
import skillsStyles from './skillsStyles';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';

const Skills = ({ skills }) => {
	const styles = skillsStyles();

	return (
		<VerticallyPaddedContainer>
			<div>
				<Typography
					variant='h5'
					color='primary'
					className={`${styles.header} ${generalStyles().underline}`}
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
			</div>
		</VerticallyPaddedContainer>
	);
};

export default Skills;
