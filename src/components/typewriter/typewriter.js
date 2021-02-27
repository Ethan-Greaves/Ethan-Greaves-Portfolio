import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './typewriter.scss';

const Typewriter = ({ randomWords }) => {
	const [currentWord, setcurrentWord] = useState('');

	const assignRandomWord = () => {
		setcurrentWord(
			//*Filter to return an array without the previous word
			randomWords.filter((randomWord) => randomWord !== currentWord)[
				//* Select randomly from randomWords array and floor number to avoid decimals
				Math.floor(Math.random() * randomWords.length)
			]
		);
	};

	return (
		<Typography align='center' variant='h5' component='h2' color='secondary'>
			<div className='subHeading' onAnimationStart={assignRandomWord} onAnimationIteration={assignRandomWord}>
				{/* If current word is not null, show the word. Otherwise, set random word */}
				{currentWord ? currentWord : assignRandomWord()}
			</div>
		</Typography>
	);
};

export default Typewriter;
