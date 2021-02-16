import { Box, Container } from '@material-ui/core';

const VerticallyPaddedContainer = ({ children, maxWidth }) => {
	return (
		<Container maxWidth={`${maxWidth}`}>
			<Box pt={4} />
			{children}
			<Box pt={4} />
		</Container>
	);
};

export default VerticallyPaddedContainer;
