import React from 'react';
import s from './style.module.scss';
import Image from 'next/image';
import Button from '@/components/button/button';

const CombinadoStandard = () => {
	return (
		<>
			<div className={s.container}>
				<Image
					src="/combinado-standard.png"
					width={650}
					height={520}
					alt="Combinado standard"
					className={s.image}
				/>
				<div className={s.description}>
					<a className={s.title}>Combinado Standard</a>
					<div className={s.valueContainer}>
						<p>*Serve 2 pessoas</p>
						<span>R$ 64,99</span>
					</div>
					<p className={s.combined}>O combinado contém:</p>
					<span>
						8x Hot rolls<br />
						16x Niguiri de salmão<br />
						4x Joe de salmão<br />
						4x Niguiri de atum<br />
						2x Temaki de salmão
					</span>
					<div className={s.buttonGrouper}>
						<Button
							className={s.button}
							apperance='secondary'
						>
							Editar Pedido
						</Button>
						<Button
							className={s.button}
						>
							Fazer Pedido
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CombinadoStandard;
