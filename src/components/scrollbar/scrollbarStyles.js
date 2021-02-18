import { makeStyles } from '@material-ui/core/styles';

const convertHexToRGBA = (hexCode, opacity) => {
	let hex = hexCode.replace('#', '');

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity / 100})`;
};

const useStyles = makeStyles((theme) => ({
	'@global': {
		'*::-webkit-scrollbar': {
			width: '10px',
		},
		'*::-webkit-scrollbar-track': {
			background: '#323434',
		},
		'*::-webkit-scrollbar-thumb': {
			background: `linear-gradient(to top, ${convertHexToRGBA(theme.palette.primary.main, 0.9)}, ${
				theme.palette.primary.main
			}, ${convertHexToRGBA(theme.palette.primary.main, 0.9)})`,
		},
	},
}));

export default useStyles;
