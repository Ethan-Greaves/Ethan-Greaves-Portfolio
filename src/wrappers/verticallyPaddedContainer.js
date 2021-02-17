import { Box, Container } from '@material-ui/core';

const VerticallyPaddedContainer = ({ children, maxWidth = 'lg', topPadding = 4, bottomPadding = 4 }) => {
	return (
		<Container maxWidth={`${maxWidth}`}>
			<Box pt={topPadding} />
			{children}
			<Box pt={bottomPadding} />
		</Container>
	);
};

export default VerticallyPaddedContainer;
