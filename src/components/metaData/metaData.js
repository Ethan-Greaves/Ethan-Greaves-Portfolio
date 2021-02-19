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
			<link
				rel='icon'
				href={`${props.metaFavicon}?h=32&fm=webp&bg=${props.primaryColour.substring(1)}`}
				style={{ borderRadius: '100px' }}
			/>

			{/* Open graph tags */}
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={props.metaDescription} />
			<meta property='og:url' content='https://ethangreaves.co.uk' />
			<meta property='og:image' content={props.metaFavicon} />

			{/* Twitter meta data */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={props.metaDescription} />
			<meta name='twitter:image' content={props.metaFavicon} />
		</Helmet>
	);
};

export default MetaData;
