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
//#endregion

const LandingPage = () => {
	//#region INITILISATION
	//#region STATE
	const [themePrimaryColour] = useState(useTheme().palette.primary.main);
	const [authorData, authorDataIsLoaded] = useSanityFetchState(`*[_type == "author"]{
		name,
		welcome,
		bio,
		"cv": cv.asset->url,
		email,
		"image": image.asset->url,
	}`);
	//#endregion

	//#region STYLES
	const styles = landingPageStyles({
		themePrimaryColour,
		btnBackgroundColour: 'black',
		btnSize: { main: '20px', side: '12px' },
		themeSecondaryColour: 'white',
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
			{ text: 'Take a look', link: '/projects', redirect: false },
			{
				text: 'Get in touch',
				link: authorData[0].email,
				redirect: true,
			},
		];

		return (
			<Container>
				<div className={`${styles.header}`}>
					<Typography variant='h3' align='center'>
						Hi, I'm <span className={`${styles.standOut}`}>{authorData[0].name}.</span> Nice to meet you!
					</Typography>

					<Box pt={4} />

					<Typography align='center' variant='body1'>
						{authorData[0].bio}
					</Typography>

					<Box pt={7} />

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
