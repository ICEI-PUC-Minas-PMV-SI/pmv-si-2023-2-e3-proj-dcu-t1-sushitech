import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/header/header';
import '../styles/global.css';
import Footer from '@/components/footer/footer';

const CoreApp = ({ Component, pageProps, ...props }) => {
	return (
		<Header>
			<Footer>
				<Component {...pageProps} {...props} />
			</Footer>
		</Header>
	);
};

CoreApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default CoreApp;
