import React from 'react';
import Link from 'gatsby-link';
import NavBar from './NavBar';
import './SiteHeader.scss';
import logo from '../img/logo.svg';

const SiteHeader = ({ posts }) => (
	<header className="site-header">

		{/* logo */}
		<div className="header-logo">
			<Link className="header-logo__link" to="/">
				<img className="header-logo__image" src={logo} alt="logo" />
				<span className="header-logo__title">logo</span>
			</Link>
		</div>

		{/* wee nav */}
		<div className="wee-nav__wrapper">
			<nav className="wee-nav">
				<Link className="" to="/">
					Home
				</Link>
			</nav>
		</div>

		<NavBar posts={posts} />

	</header>
);

export default SiteHeader;
