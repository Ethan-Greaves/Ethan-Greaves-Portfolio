import './landingPage.scss';
import '../../commonStyles/positions.scss';
import Container from '@material-ui/core/Container';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';
import useSanityFetchState from '../../hooks/useSanityFetchState';
import ExternalLink from '../../Wrappers/externalLink';
import { useTheme } from '@material-ui/core/styles';
import { useState } from 'react';

const LandingPage = () => {
	const [authorData, isLoaded] = useSanityFetchState(`*[_type == "author"]{
		name,
		welcome,
		bio,
		"cv": cv.asset->url,
		email,
		"image": image.asset->url,
	}`);

	const [themeColour, setThemeColour] = useState(useTheme().palette.primary.main);

	//TODO Make this custom hook or find more efficient way
	const checkIfButtonRedirects = (object) => {
		if (!object.redirect) {
			return (
				<Link to={object.link}>
					<Button variant='contained' id={object.style}>
						{object.text}
					</Button>
				</Link>
			);
		} else {
			return (
				<ExternalLink to={object.link} newTab={true}>
					<Button variant='contained' id={object.style}>
						{object.text}
					</Button>
				</ExternalLink>
			);
		}
	};

	if (isLoaded) {
		// Todo make this props or state
		const buttonsInfo = [
			{ text: 'Download CV', style: 'side-left-btn', link: authorData[0].cv, redirect: true },
			{ text: 'Take a look', style: 'main-btn', link: '/projects', redirect: false },
			{
				text: 'Get in touch',
				style: 'side-right-btn',
				link: authorData[0].email,
				redirect: true,
			},
		];
		return (
			<Container>
				<div className='header'>
					<Typography variant='h3' align='center'>
						Hi, I'm{' '}
						<span style={{ color: `${themeColour}`}} id='stand-out'>
							{authorData[0].name}.
						</span>{' '}
						Nice to meet you!
					</Typography>
					<Box pt={4} />
					<Typography align='center' variant='body1'>
						{authorData[0].bio}
					</Typography>
					<Box pt={7} />

					<Grid container direction='row' alignItems='center' justify='center' spacing={10}>
						{buttonsInfo.map((button, i) => {
							return <Grid item>{checkIfButtonRedirects(button)}</Grid>;
						})}
					</Grid>
				</div>
			</Container>
		);
	} else return null;
};

export default LandingPage;
