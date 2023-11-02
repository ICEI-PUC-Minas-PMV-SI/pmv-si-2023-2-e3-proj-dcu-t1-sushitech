import React from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';

const MonteSeuCombinado = () => {
	return (
		<>
			<div className={s.container}>
				<Image
					src="/monte-seu-combinado.png"
					width={650}
					height={520}
					alt="Monte seu combinado"
					className={s.image}
				/>
				<div className={s.description}>
					<a className={s.title}>Monte seu combinado</a>
					<p className={s.combined}>Monte o combinado do seu jeito!</p>
					<div className={s.buttonGrouper}>
						<Button
							className={s.button}
						>
							Montar combinado
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MonteSeuCombinado;
