const ExternalLink = ({ children, to, newTab = false }) => {
	return (
		<a href={to} target={newTab && '_blank'}>
			{children}
		</a>
	);
};

export default ExternalLink;
