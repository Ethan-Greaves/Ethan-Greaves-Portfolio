import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	'@keyframes spin': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
	loadingIcon: {
		border: '3px solid #f3f3f3',
		borderTop: `3px solid ${theme.palette.primary.main}`,
		borderRadius: '50%',
		width: '10px',
		height: '10px',
		animation: '$spin .5s linear infinite',
	},
}));

export default useStyles;
