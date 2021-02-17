import { Typography, useTheme, Grid, Box } from '@material-ui/core';
import React, { useState } from 'react';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import generalStyles from '../../commonStyles/generalStyles';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExternalLink from '../../Wrappers/externalLink';

const Footer = ({ ...authorData }) => {
	const primaryColour = useTheme().palette.primary.main;

	const socialIcons = [
		{ icon: faGithub, link: 'https://github.com/Ethan-Greaves', colour: 'white' },
		{ icon: faLinkedin, link: 'https://www.linkedin.com/in/ethan-greaves-b39504178/', colour: '#2867B2' },
		{ icon: faEnvelope, link: authorData.email, colour: 'white' },
	];

	return (
		<VerticallyPaddedContainer maxWidth='md' bottomPadding={1}>
			<Typography color='primary' variant='h5' className={`${generalStyles({ primaryColour }).underline}`}>
				{`socials`.toUpperCase()}
			</Typography>

			<Box mt={8} />

			<Grid container justify='space-around'>
				{socialIcons.map((icon) => {
					return (
						<Grid item>
							<ExternalLink newTab={true} to={icon.link}>
								<FontAwesomeIcon icon={icon.icon} style={{ color: 'white' }} size='3x' />
							</ExternalLink>
						</Grid>
					);
				})}
			</Grid>
			<Box mt={6} />
			<Typography color='secondary' variant='caption'>
				{`Developed by ${authorData.name}`} <span>&#169;</span> {new Date().getFullYear()}
			</Typography>
		</VerticallyPaddedContainer>
	);
};

export default Footer;
