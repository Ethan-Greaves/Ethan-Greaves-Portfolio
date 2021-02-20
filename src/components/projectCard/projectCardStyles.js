import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	title: {
		fontWeight: '600',
	},

	card: {
		borderBottomLeftRadius: '15px',
		borderTopRightRadius: '15px',
		// border: `4px solid ${props.primaryColour}`,
		'&:hover $overlay': {
			opacity: 0.8,
		},
	},

	image: {},

	content: {
		// position: 'absolute',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},

	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		height: '100%',
		width: '100%',
		opacity: 0,
		transition: '.5 ease',
		backgroundColor: '#030303',
	},
});

export default useStyles;
