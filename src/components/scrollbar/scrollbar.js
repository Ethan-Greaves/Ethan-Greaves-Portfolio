import React from 'react';
import ScrollbarStyles from './scrollbarStyles';
const Scrollbar = ({ children }) => {
	ScrollbarStyles();
	return <div>{children}</div>;
};

export default Scrollbar;
