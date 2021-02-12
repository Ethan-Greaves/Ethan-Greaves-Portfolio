import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	title: {
		fontWeight: '600',
	},

	card: (props) => ({
		borderBottomLeftRadius: '15px',
		borderTopRightRadius: '15px',
		// border: `4px solid ${props.primaryColour}`,
	}),
});

export default useStyles;
