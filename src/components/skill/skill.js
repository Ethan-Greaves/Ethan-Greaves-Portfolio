import React from 'react';
import LazyLoad from 'react-lazyload';
import Zoom from '@material-ui/core/Zoom';
import { Tooltip } from '@material-ui/core';
import skillsStyles from './skillStyles';
import LoadingIcon from '../loadingIcon/loadingIcon';

const Skill = ({ imgSize, skill }) => {
	const styles = skillsStyles({ imgSize });
	return (
		<LazyLoad placeholder={<LoadingIcon />} once={true}>
			<Tooltip title={skill} TransitionComponent={Zoom}>
				<img
					className={`${styles.skillImg}`}
					src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${skill.toLowerCase()}/${skill.toLowerCase()}.png`}
					alt={skill}
				/>
			</Tooltip>
		</LazyLoad>
	);
};

export default Skill;
