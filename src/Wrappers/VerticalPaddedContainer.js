import { Box, Container } from '@material-ui/core';

const VerticallyPaddedContainer = ({ children, maxWidth, pt, pb }) => {
	return (
		<Container maxWidth={`${maxWidth}`}>
			<Box pt={pt} />
			{children}
			<Box pt={pb} />
		</Container>
	);
};

export default VerticallyPaddedContainer;
