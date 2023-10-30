import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/header/header';
import '../styles/global.css';
import Footer from '@/components/footer/footer';
import Reservas from './reservas';

const CoreApp = ({ Component, pageProps, ...props }) => {
	return (
		<Header>
			<Footer>
				<Component {...pageProps} {...props} />
			</Footer>
			<Reservas />
		</Header>
	);
};

CoreApp.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default CoreApp;
