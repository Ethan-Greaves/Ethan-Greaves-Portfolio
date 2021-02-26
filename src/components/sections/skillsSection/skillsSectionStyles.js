import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

	'@media (max-width: 426px)': {
		skillImg: {
			height: 60,
			// display: 'block',
			// marginLeft: 'auto',
			// marginRight: 'auto',
			// // width: '50%',
		},

		header: {
			textAlign: 'center',
		},
	},

	'@media (max-width: 321px)': {
		skillImg: {
			height: 40,
		},
	},

	'@media (max-width: 376px)': {
		skillImg: {
			height: 50,
		},
	},
}));

export default useStyles;
