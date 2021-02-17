const social = {
	name: 'social',
	title: 'Social',
	type: 'document',
	fields: [
		{
			name: 'platform',
			title: 'Social platform',
			type: 'string',
		},
		{
			name: 'link',
			title: 'Personal Link',
			description: 'The link to your personal account with the associated platform',
			type: 'url',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
	],

	preview: {
		select: {
			title: 'platform',
			media: 'image',
		},
	},
};

export default social;
