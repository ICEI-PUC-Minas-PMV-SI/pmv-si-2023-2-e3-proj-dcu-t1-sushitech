import React from 'react';
import propTypes from 'prop-types';
import Image from 'next/image';
import s from './style.module.scss';

const Header = ({ children }) => {
	return (
		<>
			<div className={s.header}>
				<Image
					src="/sushi-tech-logo.png"
					width={250}
					height={165}
					alt="SushiTech logo"/>
				<div className={s.headerOptions}>
					<span>Cardápio</span>
					<span>Reservas</span>
					<span>Mais informações</span>
				</div>
				<div className={s.line} />
			</div>
			<div>{children}</div>
		</>

	);
};

Header.propTypes = {
	children: propTypes.node,
};

export default Header;
