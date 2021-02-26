import VerticallyPaddedContainer from './VerticalPaddedContainer';
import SectionTitle from './sectionTitle';

const Section = ({ children, title, maxWidth = 'md', pt = 4, pb = 4, titleMb = 4 }) => {
	return (
		<VerticallyPaddedContainer maxWidth={maxWidth} pt={pt} pb={pb}>
			<SectionTitle titleMb={titleMb}>{title}</SectionTitle>
			{children}
		</VerticallyPaddedContainer>
	);
};

export default Section;
