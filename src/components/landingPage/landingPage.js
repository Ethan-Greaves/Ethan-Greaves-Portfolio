//#region IMPORTS
import '../../commonStyles/positions.scss';
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
//#endregion

const LandingPage = () => {
	//#region INITILISATION
	//#region STATE
	const [themePalette] = useState(useTheme().palette);
	const [authorData, authorDataIsLoaded] = useSanityFetchState(`*[_type == "author"]{
		name,
		welcome,
		role,
		"cv": cv.asset->url,
		email,
		"image": image.asset->url,
	}`);
	//#endregion

	//#region STYLES
	const styles = landingPageStyles({
		themePrimaryColour: themePalette.primary.main,
		btnBackgroundColour: 'black',
		btnSize: { main: '15px', side: '12px' },
		themeSecondaryColour: themePalette.secondary.main,
	});
	//#endregion
	//#endregion

	//#region CUSTOM METHODS
	//TODO Make this custom hook or find more efficient way
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

	//#endregion

	if (authorDataIsLoaded) {
		// Todo make this props or state
		const buttonsInfo = [
			{ text: 'Download CV', link: authorData[0].cv, redirect: true },
			{ text: 'Projects', link: '/projects', redirect: false },
			{
				text: 'Get in touch',
				link: authorData[0].email,
				redirect: true,
			},
		];

		return (
			<Container>
				<div className={`${styles.header}`}>
					<Typography variant='h2' align='center'>
						<span className={`${styles.standOut}`}>{authorData[0].name}</span>
					</Typography>

					<Box pt={0} />

					<Typography align='center' variant='h5'>
						<div className='subHeading'>
							<span>{authorData[0].role}</span>
						</div>
					</Typography>

					<Box pt={4} />

					<Grid container direction='row' alignItems='center' justify='center' spacing={10}>
						{buttonsInfo.map((button) => {
							return <Grid item>{checkIfButtonRedirects(button)}</Grid>;
						})}
					</Grid>
				</div>
			</Container>
		);
	} else return null;
};

export default LandingPage;
