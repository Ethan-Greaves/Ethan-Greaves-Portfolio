import { Typography, Grid, Box } from '@material-ui/core';
import React from 'react';
import VerticallyPaddedContainer from '../../Wrappers/verticallyPaddedContainer';
import generalStyles from '../../commonStyles/generalStyles';
import ExternalLink from '../../Wrappers/externalLink';
import LazyLoad from 'react-lazyload';
import { v4 as uuidv4 } from 'uuid';

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
						<Grid item key={uuidv4()}>
							<ExternalLink newTab={true} to={social.link} noopener={true}>
								<LazyLoad placeholder={<p>Loading...</p>} once={true}>
									<img src={social.image + '?h=40&fm=webp'} alt={social.platform} />
								</LazyLoad>
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
