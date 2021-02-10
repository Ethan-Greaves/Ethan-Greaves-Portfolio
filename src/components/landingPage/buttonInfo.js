const buttonsInfo = (cv, email) => {
	return [
		{ text: 'Download CV', link: cv, redirect: true },
		{ text: 'Projects', link: '/projects', redirect: false },
		{
			text: 'Get in touch',
			link: email,
			redirect: true,
		},
	];
};

export default buttonsInfo;
