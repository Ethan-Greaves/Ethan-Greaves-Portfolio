import { Typography, Grid, Box } from '@material-ui/core';
import React from 'react';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import generalStyles from '../../commonStyles/generalStyles';
import ExternalLink from '../../Wrappers/externalLink';

const Footer = ({ ...authorData }) => {
	return (
		<VerticallyPaddedContainer bottomPadding={1}>
			<Typography color='primary' variant='h5' className={`${generalStyles().underline}`}>
				{`socials`.toUpperCase()}
			</Typography>

			<Box mt={8} />

			<Grid container justify='space-around'>
				{authorData.socials.map((social) => {
					return (
						<Grid item>
							<ExternalLink newTab={true} to={social.link} noopener={true}>
								<img src={social.image} alt={social.platform} style={{ height: 40 }} />
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
