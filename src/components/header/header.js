import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import s from './style.module.scss';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Header = ({ children }) => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 900 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};
	return (
		<>
			<header className={s.header}>
				<div className={s.header__content}>
					<Image
						className={s.header__content__logo}
						onClick={() => router.push('/')}
						src="/sushi-tech-logo.svg"
						width={230}
						height={130}
						alt="SushiTech logo" />
					<nav
						className={`${s.header__content__nav}
							${menuOpen && size.width < 900 ? `${s.isMenu}` : ''}
							}`}
					>
						<ul>
							<li onClick={() => router.push('/cardapio')}>Cardápio</li>
							<li onClick={() => router.push('/reservas')}>Reservas</li>
							<li onClick={() => router.push('/mais-infos')}>Mais informações</li>
							<li></li>
						</ul>
					</nav>
					<div className={s.header__content__toggle}>
						{!menuOpen ? (
							<AiOutlineMenu onClick={menuToggleHandler} />
						) : (
							<AiOutlineClose onClick={menuToggleHandler} />
						)}
					</div>
				</div>
			</header>
			<div className={s.line} />
			<div>{children}</div>
		</>

	);
};

Header.propTypes = {
	children: propTypes.node,
};

export default Header;
