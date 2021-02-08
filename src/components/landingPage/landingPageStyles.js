import { makeStyles } from '@material-ui/core/styles';

function landingPageBtn(btnColour, btnBackgroundColour, btnSize) {
	return {
		color: btnColour,
		textTransform: 'uppercase',
		textDecoration: 'none',
		background: btnBackgroundColour,
		padding: btnSize,
		borderRadius: '5px',
		display: 'inline-block',
		border: 'none',
		transition: 'all 0.4s ease 0s',
		fontWeight: 'bold',
		fontSize: '12px',

		'&:hover': {
			background: btnBackgroundColour,
			WebkitTransform: 'scale(1.1)',
			msTransform: 'scale(1.1)',
			transform: 'scale(1.1)',
		},
	};
}

const useStyles = makeStyles({
	mainBtn: (props) => landingPageBtn(props.themePrimaryColour, props.btnBackgroundColour, props.btnSize.main),
	sideBtn: (props) => landingPageBtn(props.btnBackgroundColour, props.themePrimaryColour, props.btnSize.side),

	header: (props) => ({
		color: props.themeSecondaryColour,
		width: '75%',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	}),

	standOut: (props) => ({
		display: 'inline-flex',
		color: props.themePrimaryColour,
	}),
});

export default useStyles;
