import { Typography, Box } from '@material-ui/core';
import { Fragment } from 'react';
import generalStyles from '../commonStyles/generalStyles';

const SectionTitle = ({ children, titleMb }) => {
	return (
		<Fragment>
			<Typography variant='h5' color='primary' className={generalStyles().underline} style={{ fontWeight: 400 }}>
				{children.toUpperCase()}
			</Typography>

			<Box mb={titleMb} />
		</Fragment>
	);
};

export default SectionTitle;
