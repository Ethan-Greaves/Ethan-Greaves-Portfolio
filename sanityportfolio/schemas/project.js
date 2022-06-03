import skills from './author/skills';
const blurbMaxLength = 100;

const projectSchema = {
	name: 'project',
	title: 'Project',
	type: 'document',
	fieldsets: [{ name: 'media', title: 'Media' }],

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'created',
			title: 'Created',
			type: 'date',
			options: {
				dateFormat: 'DD-MM-YYYY',
			},
		},
		{
			name: 'technologies',
			title: 'Technologies',
			description: 'List the technologies, software and languages used on this project',
			type: 'array',
			of: [{ type: 'string' }],
			validation: (Rule) => [Rule.unique()],
			options: {
				list: skills,
			},
		},
		{
			name: 'coverImage',
			title: 'Cover image',
			description: 'Main image for project. Displayed on projects page.',
			type: 'image',
			options: {
				hotspot: true,
			},
			fieldset: 'media',
		},
		{
			name: 'blurb',
			title: 'Blurb',
			description: 'A short summary of the project',
			type: 'text',
			maxLength: blurbMaxLength,
			validation: (Rule) =>
				Rule.max(blurbMaxLength).error(`Don't make the blurb too long! (${blurbMaxLength} characters)`),
		},

		{
			name: 'githubLink',
			title: 'GitHub link',
			type: 'url',
		},
		{
			name: 'externalLink',
			title: 'External link',
			description: 'Link to live demo, .exe download, hosted page, etc.',
			type: 'url',
		},
	],
	orderings: [
		{
			title: 'Date Created, Latest',
			name: 'dateCreatedDesc',
			by: [{ field: 'created', direction: 'desc' }],
		},
		{
			title: 'Date Created, Oldest',
			name: 'dateCreatedAsc',
			by: [{ field: 'created', direction: 'Asc' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'coverImage',
		},
	},
};

export default projectSchema;
