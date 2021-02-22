import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	skillImg: (props) => ({
		height: props.imgSize,
		width: 'auto',
		transition: '0.2s',
		borderRadius: '5px',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	}),
}));

export default useStyles;
