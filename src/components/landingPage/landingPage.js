import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import './landingPage.scss';
import '../../commonStyles/positions.scss';
import Container from '@material-ui/core/Container';
import { Avatar, Box, Button, Grid, Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	const [authorData, setAuthor] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const buttonsInfo = [
		{ text: 'Download CV', style: 'side-left-btn' },
		{ text: 'Take a look', style: 'main-btn' },
		{ text: 'Get in touch', style: 'side-right-btn' },
	];

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
				name,
				welcome,
				bio,
				"cv": cv.assest->url,
				email,
				"image": image.asset->url,
			}`
			)
			.then((response) => setAuthor(response))
			.then(() => setIsLoaded(true))
			.catch((e) => console.error(e));
	}, [authorData]);

	if (isLoaded) {
		const author = authorData[0];
		return (
			<Container>
				<div className='header'>
					{/* <Avatar alt={author.name} src={author.image} style={{width: '100px', height: '100px'}} /> */}
					<Typography variant='h3' align='center'>
						Hi, I'm <span id='stand-out'>{author.name}.</span> Nice to meet you!
					</Typography>
					<Box pt={4} />
					<Typography align='center' variant='body1'>
						{author.bio}
					</Typography>
					<Box pt={7} />

					<Grid container direction='row' alignItems='center' justify='center' spacing={10}>
						{buttonsInfo.map((button, i) => {
							return (
								<Grid item>
									<Link to='/projects'>
										<Button variant='contained' id={button.style}>
											{button.text}
										</Button>
									</Link>
								</Grid>
							);
						})}
					</Grid>
				</div>
			</Container>
		);
	} else return null;
};

export default LandingPage;
