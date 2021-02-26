import React from 'react';
import { Grid } from '@material-ui/core';
import Skill from '../../skill/skill';
import skillsSectionStyles from './skillsSectionStyles';
import Section from '../../../Wrappers/section';

const Skills = ({ skills }) => {
	skillsSectionStyles();

	return (
		<Section title='skills'>
			<Grid container spacing={3} align='center'>
				{skills.map((skill, i) => {
					return (
						<Grid item xs={4} sm={3} key={i}>
							<Skill skill={skill} imgSize={90} />
						</Grid>
					);
				})}
			</Grid>
		</Section>
	);
};

export default Skills;
