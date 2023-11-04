import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/header/header';
import NavBar from '@/components/navbar/navbar';
import AboutUs from '@/components/aboutus/aboutus';
import Chef from '@/components/chef/chef';
import Intro from '@/components/intro/intro';
import Laurels from '@/components/laurels/laurels';
import Gallery from '@/components/gallery/gallery';
import FindUs from '@/components/findus/findus';
import Footer from '@/components/footer/footer';
import '../styles/global.css';

const CoreApp = ({ Component, pageProps, ...props }) => {
	return (
		<div>
			<NavBar />
			<Header />
			<AboutUs />
			<Chef />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
};

CoreApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default CoreApp;
