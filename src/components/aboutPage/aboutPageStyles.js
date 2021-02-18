import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(20),
		height: theme.spacing(20),
	},

	medium: {
		width: theme.spacing(25),
		height: theme.spacing(25),
	},

	large: {
		width: theme.spacing(30),
		height: theme.spacing(30),
	},

	profileImg: {
		border: `2.5px solid ${theme.palette.primary.main}`,
	},

	'@media (max-width: 426px) and (orientation: portrait)': {
		text: {
			textAlign: 'center',
		},

		grid: {
			flexDirection: 'column-reverse',
		},
	},
}));

export default useStyles;
