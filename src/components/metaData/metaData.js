import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ props }) => {
	return (
		<Helmet>
			<title>{`${props.name} - Portfolio`}</title>
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='description' content={props.metaDescription} />
            <link rel='icon' href={props.metaFavicon} type='image/x-icon' />
            
            {/* Twitter meta data */}
            
		</Helmet>
	);
};

export default MetaData;
