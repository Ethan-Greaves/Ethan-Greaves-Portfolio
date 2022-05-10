import React, { memo } from 'react';
import { Typography } from '@material-ui/core';
import './typewriter.scss';
import Typewriter from 'typewriter-effect';

const DisplayTypewriter = ({ randomWords }) => {
	return (
		<Typography align="center" variant="h5" component="h2" color="secondary">
			<div className="subHeading">
				<Typewriter
					options={{
						strings: randomWords,
						autoStart: true,
						loop: true,
						pauseFor: 10000,
					}}
				/>
			</div>
		</Typography>
	);
};

export default memo(DisplayTypewriter);
