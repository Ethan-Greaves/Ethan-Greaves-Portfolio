import { makeStyles } from '@material-ui/core/styles';

function landingPageBtn(btnColour, btnBackgroundColour, btnSize) {
	return {
		color: btnColour,
		textDecoration: 'none',
		background: btnBackgroundColour,
		padding: btnSize,
		borderRadius: '0.313rem',
		display: 'inline-block',
		border: 'none',
		transition: 'all 0.5s ease 0s',
		fontWeight: 'bold',
		fontSize: '0.76rem',

		verticalAlign: 'middle',
		webkitTransform: 'perspective(1px) translateZ(0)',
		transform: 'perspective(1px) translateZ(0)',

		'&:hover': {
			background: btnBackgroundColour,
		},
	};
}

const useStyles = makeStyles({
	sideBtn: (props) => landingPageBtn(props.themePrimaryColour, 'none', null),
	mainBtn: (props) => landingPageBtn(props.btnBackgroundColour, props.themePrimaryColour, props.btnSize.main),

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
