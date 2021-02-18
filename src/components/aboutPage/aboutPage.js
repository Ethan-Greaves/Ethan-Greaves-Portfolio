import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import aboutPageStyles from './aboutPageStyles';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import buttonStyles from '../../commonStyles/buttonStyles';
import ExternalLink from '../../Wrappers/externalLink';

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();

	return (
		<VerticallyPaddedContainer>
			<div className={`${styles.text}`}>
				<Typography variant='h5' color='primary' className={`${generalStyles().underline}`}>
					{`About me`.toUpperCase()}
				</Typography>
				<Box mt={4} />

				<Grid container direction='rows' justify='space-between' spacing={4} className={`${styles.grid}`}>
					<Grid item xs={12} sm={9}>
						<Typography color='secondary'>{authorData.bio} </Typography>
					</Grid>

					<Grid item xs={12} sm={3} align='right'>
						<Box mt={1} />
						<Avatar
							variant='circle'
							src={authorData.image}
							className={`${styles.small} ${styles.profileImg}`}
						/>
					</Grid>
				</Grid>

				<Box mt={3} />

				<ExternalLink to={authorData.cv} newTab={true}>
					<Button className={`${buttonStyles().primaryBtn}`}>Download CV</Button>
				</ExternalLink>
			</div>
		</VerticallyPaddedContainer>
	);
};

export default AboutPage;
