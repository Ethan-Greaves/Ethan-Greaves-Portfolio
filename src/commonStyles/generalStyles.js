import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	underline: {
		borderBottom: `0.07em solid ${theme.palette.primary.main}`,
		maxWidth: 'fit-content',
	},
}));

export default useStyles;
