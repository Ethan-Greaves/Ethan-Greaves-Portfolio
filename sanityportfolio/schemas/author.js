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
			name: 'role',
			title: 'Role/Occupation',
			description: 'What would you desribe yourself as?',
			type: 'string',
		},
		{
			name: 'welcome',
			title: 'Welcome message',
			type: 'string',
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
			name: 'github',
			title: 'GitHub',
			type: 'url',
			fieldset: 'social',
		},
		{
			name: 'linkedin',
			title: 'LinkedIn',
			type: 'url',
			fieldset: 'social',
		},
		{
			name: 'email',
			title: 'Email',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['mailto'],
				}),
			fieldset: 'social',
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};

export default author;
