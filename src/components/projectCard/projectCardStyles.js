import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: '600',
	},

	card: {
		borderBottomLeftRadius: '15px',
		borderTopRightRadius: '15px',
		// border: `4px solid ${theme.palette.primary.main}`,

		'&:hover $overlay': {
			opacity: 0.85,
		},
	},

	image: {},

	content: {
		// position: 'absolute',
		paddingRight: '20px',
		paddingLeft: '20px',
	},

	overlay: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: '100%',
		width: '100%',
		opacity: 0,
		transition: '.3s',
		backgroundColor: '#030303',
	},
}));

export default useStyles;
