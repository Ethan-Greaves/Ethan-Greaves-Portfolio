import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	underline: (props) => ({
		borderBottom: `0.07em solid ${props.primaryColour}`,
		maxWidth: 'fit-content',
	}),
});

export default useStyles;
