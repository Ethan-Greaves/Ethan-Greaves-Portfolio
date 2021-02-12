import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	header: (props) => ({
		color: props.primaryColour,
		fontWeight: 600,
		// borderBottom: `0.04em solid ${props.primaryColour}`,
		// maxWidth: 'fit-content',
	}),

	projects: {},
});

export default useStyles;
