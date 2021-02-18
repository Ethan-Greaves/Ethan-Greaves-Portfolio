//#region IMPORTS
import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import landingPageStyles from './landingPageStyles';
import './landingPageAnimations.scss';
import '../../commonStyles/buttonAnims.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//#endregion

const LandingPage = ({ ...authorData }) => {
	//#region INITILISATION
	const [currentDisplayedRole, setCurrentDisplayedRole] = useState('');
	const styles = landingPageStyles();
	//#endregion

	//#region CUSTOM METHODS
	const setRandomRole = () => {
		setCurrentDisplayedRole(
			//*Filter to return an array without the previous role and randomly choose from it
			authorData.roles.filter((role) => role !== currentDisplayedRole)[
				//* Select randomly from roles array and floor number to avoid decimals
				Math.floor(Math.random() * authorData.roles.length)
			]
		);
	};
	//#endregion

	return (
		<div className={`${styles.header}`}>
			<Typography variant='h2' align='center' className={`${styles.standOut}`}>
				{authorData.name}
			</Typography>

			<Typography align='center' variant='h5'>
				<div className='subHeading' onAnimationStart={setRandomRole} onAnimationIteration={setRandomRole}>
					{currentDisplayedRole ? currentDisplayedRole : setRandomRole()}
				</div>
			</Typography>

			<Box pt={4} />

			<a href='#skills'>
				<FontAwesomeIcon icon={faChevronDown} size='1.5x' className={`${styles.arrow}`} />
			</a>
		</div>
	);
};

export default LandingPage;
