import React from 'react';
import propTypes from 'prop-types';
import styles from './style.module.scss';
import classnames from 'classnames';

const Button = ({ type, onClick, className, children, apperance }) => {
	const getApperance = () => {
		switch(apperance) {
		case 'primary':
			return styles.primaryButton;
		case 'secondary':
			return styles.secondaryButton;
		case 'disable':
			return styles.disableButton;
		default:
			return styles.primaryButton;
		}
	};
	return(
		<button
			type={type ? type : 'button'}
			className={classnames(getApperance(), className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: propTypes.string,
	onClick: propTypes.func,
	className: propTypes.string,
	children: propTypes.node,
	apperance: propTypes.string,
};


export default Button;
