import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	header: (props) => ({
		color: props.themeSecondaryColour,
		textTransform: 'uppercase',
		// position: 'absolute',
		// top: '50%',
		// left: '50%',
		// transform: 'translate(-50%, -50%)',
		display: 'flex',
		flexDirection: 'column',
		// alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
	}),

	standOut: (props) => ({
		color: props.themePrimaryColour,
		fontWeight: 600,
	}),
});

export default useStyles;
