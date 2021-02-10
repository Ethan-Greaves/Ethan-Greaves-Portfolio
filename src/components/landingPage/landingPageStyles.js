import { makeStyles } from '@material-ui/core/styles';

function landingPageBtn(btnColour, btnBackgroundColour, btnSize) {
	const scale = 1.1;
	return {
		color: btnColour,
		textTransform: 'uppercase',
		textDecoration: 'none',
		background: btnBackgroundColour,
		padding: btnSize,
		borderRadius: '0.313rem',
		display: 'inline-block',
		border: 'none',
		transition: 'all 0.5s ease 0s',
		fontWeight: 'bold',
		fontSize: '0.76rem',

		'&:hover': {
			background: btnBackgroundColour,
			WebkitTransform: `scale(${scale})`,
			msTransform: `scale(${scale})`,
			transform: `scale(${scale})`,
		},
	};
}

const useStyles = makeStyles({
	sideBtn: (props) => landingPageBtn(props.themePrimaryColour, 'none', null),
	mainBtn: (props) => landingPageBtn(props.btnBackgroundColour, props.themePrimaryColour, props.btnSize.main),

	header: (props) => ({
		color: props.themeSecondaryColour,
		width: '100%',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textTransform: 'uppercase',
	}),

	standOut: (props) => ({
		display: 'inline-flex',
		color: props.themePrimaryColour,
		fontWeight: 600,
	}),
});

export default useStyles;
