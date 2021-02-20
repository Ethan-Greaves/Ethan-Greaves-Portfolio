const ExternalLink = ({ children, to, newTab = false, noopener = false, ariaLabel }) => {
	return (
		<a href={to} aria-label={ariaLabel} target={newTab && '_blank'} rel={noopener && 'noopener'}>
			{children}
		</a>
	);
};

export default ExternalLink;
