import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	skillImg: {
		height: 80,
		width: 'auto',
        transition: '0.2s',
        borderRadius: '10px',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
});

export default useStyles;
