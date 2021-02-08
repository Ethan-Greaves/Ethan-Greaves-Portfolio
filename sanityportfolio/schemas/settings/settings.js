import { defaultCSSColours, customColours } from './colours';
import { colorToHex } from './colourConverters';

const settings = {
	name: 'settings',
	title: 'Settings',
	type: 'document',

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
			title: 'Theme colour',
			description:
				'Will change the main colour of the portfolio website e.g. the colour of "Ethan Greaves." text on the landing page',
			name: 'themeColour',
			type: 'colorlist',
			options: {
				borderradius: {
					outer: '100%',
					inner: '100%',
				},

				list: defaultCSSColours
					.map((colour) => {
						return colorToHex(colour);
					})
					.map((coloursHexValue, i) => {
						return {
							title: defaultCSSColours[i],
							value: coloursHexValue,
						};
					})
					.concat(customColours),
			},
		},
	],
};

export default settings;
