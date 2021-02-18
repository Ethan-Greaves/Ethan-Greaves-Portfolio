const ExternalLink = ({ children, to, newTab = false, noopener = false }) => {
	return (
		<a href={to} target={newTab && '_blank'} rel={noopener && 'noopener'}>
			{children}
		</a>
	);
};

export default ExternalLink;
