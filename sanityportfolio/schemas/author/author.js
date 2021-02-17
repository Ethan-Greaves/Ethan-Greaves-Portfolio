import skills from './skills';

const author = {
	name: 'author',
	title: 'Author',
	type: 'document',
	fieldsets: [{ name: 'social', title: 'Social Links' }],
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'roles',
			title: 'Role/Occupation',
			description: 'What would you describe yourself as?',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => [Rule.unique(), Rule.max(15)],
		},
		{
			name: 'skills',
			title: 'Skills & technologies',
			description: 'What skills do you know? A.K.A languages, software, etc.',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => [Rule.unique()],
			options: {
				list: skills,
			},
		},
		{
			name: 'bio',
			title: 'Bio',
			type: 'text',
		},
		{
			name: 'cv',
			title: 'CV',
			type: 'file',
			options: {
				accept: ['.pdf', '.docx'],
			},
		},
		{
			name: 'socials',
			title: 'Socials',
			description:
				'Select the social media you want to show on your portfolio. Social must be created in the social schema first',
			type: 'array',
			of: [
				{
					title: 'Social',
					type: 'reference',
					to: [{ type: 'social' }],
				},
			],

			validation: (Rule) => [Rule.unique()],
			// options: {
			// 	list: [{ value: , title: 'Github' }],
			// },
		},
		// {
		// 	name: 'github',
		// 	title: 'GitHub',
		// 	type: 'url',
		// 	fieldset: 'social',
		// },
		// {
		// 	name: 'linkedin',
		// 	title: 'LinkedIn',
		// 	type: 'url',
		// 	fieldset: 'social',
		// },
		// {
		// 	name: 'email',
		// 	title: 'Email',
		// 	type: 'url',
		// 	validation: (Rule) =>
		// 		Rule.uri({
		// 			scheme: ['mailto'],
		// 		}),
		// 	fieldset: 'social',
		// },
	],

	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};

export default author;
