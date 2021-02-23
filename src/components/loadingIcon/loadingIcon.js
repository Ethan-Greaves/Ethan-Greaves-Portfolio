import React, { useState } from 'react';
import LoadingIconStyles from './loadingIconStyles';

const LoadingIcon = () => {
	const styles = LoadingIconStyles();
	return <div className={`${styles.loadingIcon}`}></div>;
};

export default LoadingIcon;
