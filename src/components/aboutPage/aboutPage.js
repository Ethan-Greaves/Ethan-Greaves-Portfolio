import { Avatar, Box, Button, Grid, Typography, useTheme } from '@material-ui/core';
import React from 'react';
import aboutPageStyles from './aboutPageStyles';
import generalStyles from '../../commonStyles/generalStyles';
import VerticallyPaddedContainer from '../../wrappers/verticallyPaddedContainer';
import buttonStyles from '../../commonStyles/buttonStyles';
import ExternalLink from '../../wrappers/externalLink';

const AboutPage = ({ ...authorData }) => {
	const styles = aboutPageStyles();
	const primaryColour = useTheme().palette.primary.main;
	const genStyles = generalStyles({ primaryColour });
	const btnStyles = buttonStyles({
		btnBackgroundColour: 'black',
		btnSize: { main: '8px', side: '12px' },
		themePrimaryColour: primaryColour,
	});

	return (
		<VerticallyPaddedContainer maxWidth='md'>
			<div className={`${styles.text}`}>
				<Typography variant='h5' color='primary' className={`${genStyles.underline}`}>
					{`About me`.toUpperCase()}
				</Typography>
				<Box mt={4} />

				<Grid container direction='rows' justify='space-between' spacing={4} className={`${styles.grid}`}>
					<Grid item xs={12} sm={9}>
						<Typography color='secondary'>{authorData.bio} </Typography>
					</Grid>

					<Grid item xs={12} sm={3} align='right'>
						<Box mt={2} />
						<Avatar
							variant='circle'
							src={authorData.image}
							className={`${styles.small}`}
							style={{ border: `2.5px solid ${primaryColour}` }}
						/>
					</Grid>
				</Grid>

				<Box mt={3} />

				<ExternalLink to={authorData.cv} newTab={true}>
					<Button className={`${btnStyles.primaryBtn}`}>Download CV</Button>
				</ExternalLink>
			</div>
		</VerticallyPaddedContainer>
	);
};

export default AboutPage;
