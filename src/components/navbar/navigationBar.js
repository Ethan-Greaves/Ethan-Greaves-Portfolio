import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<Navbar>
			<Link to='/projects'>
				<NavbarBrand>Brand link</NavbarBrand>
			</Link>
		</Navbar>
	);
};

export default NavigationBar;
