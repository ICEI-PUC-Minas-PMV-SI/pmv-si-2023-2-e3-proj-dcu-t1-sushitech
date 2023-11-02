import Image from 'next/image';
import React from 'react';
import propTypes from 'prop-types';
import s from './style.module.scss';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
	return (
		<>
			<footer className={s.footer}>
				<div className={s.footerContainer}>
					<Image
						src="/sushi-tech-logo.svg"
						className={s.logo}
						width={230}
						height={145}
					/>
					<div className={s.footerInfo}>
						<span><b>SushiTech BH</b></span>
						<p>R. Espírito Santo, 1972</p>
						<a>Lourdes, Belo Horizonte - MG, 30160-032</a>
						<h4>Um projeto feito com ❤️ por alunos da PUC-Minas</h4>
					</div>
					<div className={s.mediaContainer}>
						<div className={s.mediaContainer__iconContainer}>
							<AiOutlineInstagram className={s.mediaContainer__icons}/>
							<span>@sushitech</span>
						</div>
						<div className={s.mediaContainer__iconContainer}>
							<AiOutlineTwitter className={s.mediaContainer__icons}/>
							<span>@sushitech</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

Footer.propTypes = {
	children: propTypes.node,
};

export default Footer;
