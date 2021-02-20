import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ props }) => {
	const title = `${props.name} - Portfolio`;
	return (
		<Helmet>
			<title>{title}</title>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='description' content={props.metaDescription} />

			{/* Load favicon. set height to 32px, convert to webp for better compression, set background to theme primary colour */}
			{/* bg url param takes hex colour without the '#' e.g. 'FF0000'. So use substring to remove first letter in string  */}
			<link rel='icon' href={`${props.metaFavicon}?h=32&w=32&fm=webp&bg=${props.primaryColour.substring(1)}`} />

			{/* Open graph tags */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={props.metaDescription} />
			<meta property='og:url' content='https://ethangreaves.co.uk' />
			<meta property='og:image' content={`${props.metaFavicon}?bg=${props.primaryColour.substring(1)}`} />

			{/* Twitter meta data */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={props.metaDescription} />
			<meta name='twitter:image' content={`${props.metaFavicon}?bg=${props.primaryColour.substring(1)}`} />
		</Helmet>
	);
};

export default MetaData;
