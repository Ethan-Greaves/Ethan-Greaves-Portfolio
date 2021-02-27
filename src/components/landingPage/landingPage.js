//#region IMPORTS
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import landingPageStyles from './landingPageStyles';
import Typewriter from '../typewriter/typewriter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//#endregion

const LandingPage = ({ ...authorData }) => {
	const styles = landingPageStyles();

	return (
		<div className={styles.header}>
			<Typography variant='h1' align='center' className={styles.standOut}>
				{authorData.name}
			</Typography>

			<Typewriter randomWords={authorData.roles} />

			<Box pt={4} />

			<a href='#skills' aria-label='Skills section'>
				<FontAwesomeIcon icon={faChevronDown} size='1x' className={styles.arrow} />
			</a>
		</div>
	);
};

export default LandingPage;
