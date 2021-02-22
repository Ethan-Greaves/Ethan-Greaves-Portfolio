import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import Skill from '../skill/skill';
import skillsSectionStyles from './skillsSectionStyles';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/VerticalPaddedContainer';
import { v4 as uuidv4 } from 'uuid';

const Skills = ({ skills }) => {
	const styles = skillsSectionStyles();

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
							<Grid item xs={4} sm={3} key={uuidv4()}>
								<Skill skill={skill} imgSize={90} />
							</Grid>
						);
					})}
				</Grid>
			</div>
		</VerticallyPaddedContainer>
	);
};

export default Skills;
