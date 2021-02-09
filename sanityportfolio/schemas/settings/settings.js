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

	fieldsets: [{ name: 'palette', title: 'Palette' }],

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
	],
};

export default settings;
