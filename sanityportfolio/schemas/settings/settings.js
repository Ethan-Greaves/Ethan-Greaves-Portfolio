import { defaultCSSColours, customColours } from './colours';
import { colorToHex } from './colourConverters';

const colours = defaultCSSColours
	.map((colour) => {
		return colorToHex(colour);
	})
	.map((coloursHexValue, i) => {
		return {
			title: defaultCSSColours[i],
			value: coloursHexValue,
		};
	})
	.concat(customColours);

const settings = {
	name: 'settings',
	title: 'Settings',
	type: 'document',

	fieldsets: [
		{ name: 'palette', title: 'Palette' },
		{ name: 'metaData', title: 'Meta data' },
	],

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
			title: 'Primary colour',
			description:
				'Will change the primary colour of the portfolio website e.g. the colour of "Ethan Greaves." text on the landing page',
			name: 'primaryColour',
			type: 'colorlist',
			fieldset: 'palette',

			options: {
				borderradius: {
					outer: '100%',
					inner: '100%',
				},

				list: colours,
			},
		},
		{
			title: 'Secondary colour',
			description:
				'Will change the secondary colour of the portfolio website e.g. the description on the landing page',
			name: 'secondaryColour',
			type: 'colorlist',
			fieldset: 'palette',
			options: {
				borderradius: {
					outer: '100%',
					inner: '100%',
				},

				list: colours,
			},
		},
		{
			title: 'Meta description',
			name: 'metaDescription',
			description: 'The description that will show up on SERP, Twitter cards, etc.',
			type: 'text',
			fieldset: 'metaData',
			validation: (Rule) => [Rule.max(180), Rule.min(120)],
		},
		{
			title: 'Favicon',
			name: 'metaFavicon',
			description: 'Image that will appear on tab next tot tile and on mobile device home pages',
			type: 'image',
			fieldset: 'metaData',
			options: {
				accept: ['.png', '.gif', '.ico'],
			},
		},
	],
};

export default settings;
