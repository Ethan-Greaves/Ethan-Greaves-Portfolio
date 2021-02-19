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

				<Grid container direction='row' justify='space-between' spacing={4} className={`${styles.grid}`}>
					<Grid item xs={12} sm={9}>
						<Typography color='secondary'>{authorData.bio} </Typography>
					</Grid>

					<Grid item xs={12} sm={3} align='center'>
						<Avatar
							variant='circular'
							src={authorData.image + '?h=200&fm=webp'}
							className={`${styles.small} ${styles.profileImg}`}
							alt={`${authorData.name} profile image`}
						/>
					</Grid>
				</Grid>

				<Box mt={3} />

				<ExternalLink to={authorData.cv} newTab={true} noopener={true}>
					<Button className={`${buttonStyles().primaryBtn}`}>Download CV</Button>
				</ExternalLink>
			</div>
		</VerticallyPaddedContainer>
	);
};

export default AboutPage;
