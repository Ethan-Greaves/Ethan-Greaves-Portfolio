//#region IMPORTS
// import '../../commonStyles/positions.scss';
import Container from '@material-ui/core/Container';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';
import useSanityFetchState from '../../hooks/useSanityFetchState';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import landingPageStyles from './landingPageStyles';
import './landingPageAnimations.scss';
import buttonsInfo from './buttonInfo';
//#endregion

const LandingPage = () => {
	//#region INITILISATION
	//#region STATE
	const [themePalette] = useState(useTheme().palette);
	const [currentDisplayedRole, setCurrentDisplayedRole] = useState('Software Engineer');
	const [authorData, authorDataIsLoaded] = useSanityFetchState(`*[_type == "author"]{
		name,
		roles,
		"cv": cv.asset->url,
		email,
	}`);
	//#endregion
	//#region STYLES
	const styles = landingPageStyles({
		themePrimaryColour: themePalette.primary.main,
		btnBackgroundColour: 'black',
		btnSize: { main: '14px', side: '12px' },
		themeSecondaryColour: themePalette.secondary.main,
	});
	//#endregion
	//#endregion

	//#region CUSTOM METHODS
	const checkIfButtonRedirects = (object) => {
		if (!object.redirect) {
			return (
				<Link to={object.link}>
					<Button variant='contained' className={`${styles.mainBtn}`}>
						{object.text}
					</Button>
				</Link>
			);
		} else {
			return (
				<ExternalLink to={object.link} newTab={true}>
					<Button className={`${styles.sideBtn}`}>{object.text}</Button>
				</ExternalLink>
			);
		}
	};

	const setRandomRole = () => {
		setCurrentDisplayedRole(
			//*Filter to return an array without the previous role and randomly choose from that
			authorData[0].roles.filter((role) => role !== currentDisplayedRole)[
				Math.floor(Math.random() * authorData[0].roles.length)
			]
		);
	};
	//#endregion

	if (authorDataIsLoaded) {
		return (
			<Container>
				<div className={`${styles.header}`}>
					<Typography variant='h2' align='center'>
						<span className={`${styles.standOut}`}>{authorData[0].name}</span>
					</Typography>

					<Typography align='center' variant='h5'>
						<div
							className='subHeading'
							onAnimationStart={setRandomRole}
							onAnimationIteration={setRandomRole}
						>
							<span>{currentDisplayedRole ? currentDisplayedRole : setRandomRole()}</span>
						</div>
					</Typography>

					<Box pt={4} />

					<Grid container direction='row' alignItems='center' justify='center' spacing={10}>
						{buttonsInfo(authorData[0].cv, authorData[0].email).map((button) => {
							return <Grid item>{checkIfButtonRedirects(button)}</Grid>;
						})}
					</Grid>
				</div>
			</Container>
		);
	} else return null;
};

export default LandingPage;
