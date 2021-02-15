import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(10),
		height: theme.spacing(10),
	},

	medium: {
		width: theme.spacing(25),
		height: theme.spacing(25),
	},

	large: {
		width: theme.spacing(30),
		height: theme.spacing(30),
	},
}));

export default useStyles;
