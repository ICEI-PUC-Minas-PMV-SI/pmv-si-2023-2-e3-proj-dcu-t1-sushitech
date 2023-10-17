import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/header/header';
import '../styles/global.css';

const CoreApp = ({ Component, pageProps, ...props }) => {
	return (
		<Header>
			<Component {...pageProps} {...props} />
		</Header>
	);
};

CoreApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default CoreApp;
