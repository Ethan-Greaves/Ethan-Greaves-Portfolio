//#region IMPORTS
import { Typography, Grid, Box } from '@material-ui/core';
import React from 'react';
import Section from '../../../Wrappers/section';
import ExternalLink from '../../../Wrappers/externalLink';
import LazyLoad from 'react-lazyload';
import LoadingIcon from '../../loadingIcon/loadingIcon';
//#endregion

const Footer = ({ ...authorData }) => {
	return (
		<Section titleMb={8} pb={1} title='socials'>
			<Grid container justify='space-around'>
				{authorData.socials.map((social, i) => {
					return (
						<Grid item key={i}>
							<ExternalLink newTab to={social.link} noopener ariaLabel={social.platform}>
								<LazyLoad placeholder={<LoadingIcon />} once={true}>
									<img src={social.image + '?h=40&w=40&fm=webp'} alt={social.platform} />
								</LazyLoad>
							</ExternalLink>
						</Grid>
					);
				})}
			</Grid>
			<Box mt={8} />

			<Typography color='secondary' variant='caption'>
				{`Developed by ${authorData.name}`} <span>&#169;</span> {new Date().getFullYear()}
			</Typography>
		</Section>
	);
};

export default Footer;
