import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	profileImg: {
		border: `2.5px solid ${theme.palette.primary.main}`,
		width: theme.spacing(20),
		height: theme.spacing(20),
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
