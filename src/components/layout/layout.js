import Head from 'next/head';
import React from 'react';
import propTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<title>SushiTech</title>
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: propTypes.node,
};


export default Layout;
