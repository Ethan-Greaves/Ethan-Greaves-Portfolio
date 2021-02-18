import React, { useState } from 'react';
import ScrollbarStyles from './scrollbarStyles';
const Scrollbar = ({ children }) => {
	const styles = ScrollbarStyles();
	return <div>{children}</div>;
};

export default Scrollbar;
